"use client";
import React, { useState } from "react";
import {
  Search,
  Filter,
  ShoppingCart,
  Loader,
  X,
} from "lucide-react";
import ProductCard from "./components/ProductCard";
import ProductDetailModal from "./components/ProductDetailModal";
import { useProductsFromFarms } from "./hooks/useFarms";
import { Produce } from "./types";

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
  addToCart,
  cart,
  removeFromCart,
  categories,
}) => {
  // Local state for cart visibility
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Product detail modal state
  const [selectedProduct, setSelectedProduct] = useState<Produce | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  // Fetch products from farms with current filters
  const { products, total, isLoading, isError } = useProductsFromFarms({
    category: selectedCategory,
    search: searchTerm,
  });

  // Wrapper function to add to cart and open cart popup
  const handleAddToCart = (item: Produce) => {
    addToCart(item);
    setIsCartOpen(true);
  };

  // Function to open product detail modal
  const handleViewDetails = (product: Produce) => {
    setSelectedProduct(product);
    setIsDetailModalOpen(true);
  };

  // Function to close product detail modal
  const handleCloseDetailModal = () => {
    setIsDetailModalOpen(false);
    setSelectedProduct(null);
  };
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

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-12">
            <div className="flex items-center space-x-2 text-green-600">
              <Loader className="h-6 w-6 animate-spin" />
              <span>Loading fresh produce...</span>
            </div>
          </div>
        )}

        {/* Error State */}
        {isError && (
          <div className="text-center py-12">
            <div className="text-red-500 text-lg mb-4">
              Failed to load produce data. Please try again.
            </div>
            <button
              onClick={() => window.location.reload()}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Retry
            </button>
          </div>
        )}

        {/* Products Grid */}
        {!isLoading && !isError && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((item) => (
              <ProductCard
                key={`${item.id}-${item.farmer}`}
                product={item}
                onAddToCart={handleAddToCart}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        )}

        {/* No Results */}
        {!isLoading && !isError && products.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-4">
              No produce found matching your search.
            </div>
            <div className="text-sm text-gray-400 mb-4">
              Showing 0 of {total} total items
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

        {/* Results Count */}
        {!isLoading && !isError && products.length > 0 && (
          <div className="mt-8 text-center text-sm text-gray-500">
            Showing {products.length} of {total} items
          </div>
        )}
      </div>

      {/* Floating Cart Button */}
      {cart.length > 0 && !isCartOpen && (
        <div className="fixed bottom-4 right-4">
          <button
            onClick={() => setIsCartOpen(true)}
            className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 hover:scale-105"
          >
            <div className="relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cart.length}
              </span>
            </div>
          </button>
        </div>
      )}

      {/* Shopping Cart Sidebar */}
      {cart.length > 0 && isCartOpen && (
        <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-xl p-4 max-w-sm w-full mx-4 border border-gray-200 z-50">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">Cart ({cart.length})</h3>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
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

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          isOpen={isDetailModalOpen}
          onClose={handleCloseDetailModal}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
};

export default MarketplacePage;