"use client";
import React from "react";
import Image from "next/image";
import { X, MapPin, Calendar, Leaf, ShoppingCart, Heart } from "lucide-react";
import type { Product } from "@/types";

interface ProductDetailModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
}) => {
  if (!isOpen) return null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleAddToCart = () => {
    onAddToCart(product);
    // Could close modal after adding to cart
    // onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-sm transition-colors"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>

          {/* Product Image */}
          <div className="relative">
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.organic && (
                <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full font-medium flex items-center gap-1">
                  <Leaf className="h-4 w-4" />
                  Organic
                </span>
              )}
              {product.inSeason && (
                <span className="bg-orange-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                  In Season
                </span>
              )}
              {product.quantity > 0 && (
                <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                  In Stock
                </span>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <div className="text-3xl font-bold text-green-600">
                  ${product.price.toFixed(2)}
                  <span className="text-lg text-gray-500 font-normal"> per {product.unit}</span>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Heart className="h-6 w-6 text-gray-400" />
              </button>
            </div>

            {/* Farmer Information */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Farm Information</h3>
              <div className="flex items-center text-gray-600 mb-1">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{product.farmer}, {product.farmerLocation}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Harvested on {formatDate(product.harvestDate)}</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Product Details Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-sm text-gray-500">Category</div>
                <div className="font-semibold text-gray-900 capitalize">{product.category}</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-sm text-gray-500">Availability</div>
                <div className="font-semibold text-gray-900">
                  {product.quantity} {product.unit}s available
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-sm text-gray-500">Farming Method</div>
                <div className="font-semibold text-gray-900">
                  {product.organic ? "Organic" : "Conventional"}
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-sm text-gray-500">Season Status</div>
                <div className="font-semibold text-gray-900">
                  {product.inSeason ? "In Season" : "Out of Season"}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                disabled={product.quantity === 0}
                className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingCart className="h-5 w-5" />
                {product.quantity > 0 ? "Add to Cart" : "Out of Stock"}
              </button>
              <button
                onClick={onClose}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;