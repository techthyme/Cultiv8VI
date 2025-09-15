"use client";
import React, { useState } from "react";
import { Search, Filter, Grid, List, SlidersHorizontal } from "lucide-react";
import { Product, ProductCategory } from "@/types";
import ProductCard from "../product-card";

interface ProductGridProps {
  products: Product[];
  onAddToCart?: (product: Product) => void;
  onProductClick?: (product: Product) => void;
  title?: string;
  subtitle?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onAddToCart,
  onProductClick,
  title = "Fresh Produce",
  subtitle = "Discover the finest local produce from Virgin Islands farmers",
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (product.farmer && product.farmer.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "harvest":
          return new Date(b.harvestDate).getTime() - new Date(a.harvestDate).getTime();
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const categories = [
    { value: "all", label: "All Categories" },
    { value: ProductCategory.vegetables, label: "Vegetables" },
    { value: ProductCategory.fruits, label: "Fruits" },
    { value: ProductCategory.herbs, label: "Herbs" },
    { value: ProductCategory.produce, label: "Other Produce" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search products, farmers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="harvest">Recently Harvested</option>
            </select>

            {/* View Mode Toggle */}
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-3 ${viewMode === "grid" ? "bg-green-600 text-white" : "bg-white text-gray-600"}`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-3 ${viewMode === "list" ? "bg-green-600 text-white" : "bg-white text-gray-600"}`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-gray-600">
            Showing {filteredProducts.length} of {products.length} products
            {selectedCategory !== "all" && (
              <span className="ml-2 text-green-600">
                in {categories.find(c => c.value === selectedCategory)?.label}
              </span>
            )}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className={`grid gap-6 ${
            viewMode === "grid" 
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
              : "grid-cols-1"
          }`}>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onProductClick={onProductClick}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search terms or filters
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Load More Button (for future pagination) */}
        {filteredProducts.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              Load More Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;