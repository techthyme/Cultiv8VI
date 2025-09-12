"use client";
import React from "react";
import {
  Search,
  Filter,
  ShoppingCart,
} from "lucide-react";
import ProductCard from "./components/ProductCard";

interface Produce {
  id: number;
  name: string;
  farmer: string;
  location: string;
  price: number;
  unit: string;
  quantity: number;
  image: string;
  category: string;
  inSeason: boolean;
  organic: boolean;
  harvestDate: string;
}

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface CartItem extends Produce {
  cartId: number;
}

interface MarketplacePageProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
  filteredProduce: Produce[];
  addToCart: (item: Produce) => void;
  cart: CartItem[];
  removeFromCart: (cartId: number) => void;
  categories: Category[];
}

const MarketplacePage: React.FC<MarketplacePageProps> = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  showFilters,
  setShowFilters,
  filteredProduce,
  addToCart,
  cart,
  removeFromCart,
  categories,
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for produce, farmers, or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition lg:w-auto w-full justify-center"
            >
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </button>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mt-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition ${
                  selectedCategory === category.id
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                <span>{category.icon}</span>
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Island
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>All Islands</option>
                    <option>St. Thomas</option>
                    <option>St. John</option>
                    <option>St. Croix</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>All Prices</option>
                    <option>Under $5</option>
                    <option>$5 - $10</option>
                    <option>Over $10</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Certification
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>All Certifications</option>
                    <option>Organic Only</option>
                    <option>Certified Farms</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProduce.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        {filteredProduce.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-4">
              No produce found matching your search.
            </div>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Clear filters and show all products
            </button>
          </div>
        )}
      </div>

      {/* Shopping Cart Sidebar */}
      {cart.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-sm w-full mx-4 border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">Cart ({cart.length})</h3>
            <ShoppingCart className="h-5 w-5 text-green-600" />
          </div>
          <div className="max-h-40 overflow-y-auto space-y-2">
            {cart.map((item) => (
              <div
                key={item.cartId}
                className="flex items-center justify-between text-sm"
              >
                <span className="truncate">{item.name}</span>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">${item.price}</span>
                  <button
                    onClick={() => removeFromCart(item.cartId)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t pt-2 mt-2">
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>
                ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
              </span>
            </div>
            <button className="w-full mt-2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarketplacePage;