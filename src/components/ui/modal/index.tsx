"use client";
import React from "react";
import Image from "next/image";
import { X, MapPin, Calendar, Package, Leaf, ShoppingCart, User, Star, Award } from "lucide-react";
import { Product } from "@/types";
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

  const handleAddToCart = () => {
    onAddToCart(product);
    onClose(); // Close modal after adding to cart
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal Content */}
        <div
          className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative">
            <Image
              src={product.image}
              alt={product.name}
              width={800}
              height={256}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Status Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.organic && (
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium flex items-center">
                  <Leaf className="h-3 w-3 mr-1" />
                  Organic
                </span>
              )}
              {product.inSeason && (
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                  In Season
                </span>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Title and Price */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h2>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {/* FIXME: handle the farm location value */}
                <span>{product.farmer} • {product.farmerLocation}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">
                  ${product.price}
                </div>
                <div className="text-sm text-gray-500">per {product.unit}</div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Description
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Farmer Information */}
  <div className="mb-6">
    <h3 className="text-lg font-semibold text-gray-900 mb-3 
  flex items-center">
      <User className="h-5 w-5 mr-2 text-green-600" />
      About the Farmer
    </h3>
    <div className="bg-green-50 rounded-lg p-4 border 
  border-green-100">
      <div className="flex items-start gap-3">
        <div className="bg-green-600 text-white rounded-full 
  w-10 h-10 flex items-center justify-center font-semibold">
          {product.farmer ? product.farmer.charAt(0) : ""}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold 
  text-gray-900">{product.farmer}</h4>
            <div className="flex items-center text-yellow-500">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm text-gray-600 
  ml-1">4.8</span>
            </div>
          </div>
          <div className="flex items-center text-sm 
  text-gray-600 mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{product.farmerLocation}</span>
          </div>
          <div className="flex items-center gap-4 text-sm 
  text-gray-600">
            <div className="flex items-center">
              <Award className="h-4 w-4 mr-1 text-green-600" />
              <span>Certified Organic</span>
            </div>
            <div>
              <span className="font-medium">5+ years</span>
  farming experience
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            "Growing fresh, sustainable produce for our Virgin
  Islands community since 2019."
          </p>
        </div>
      </div>
    </div>
  </div>

            {/* Product Details */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Package className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">
                    Availability
                  </span>
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  {product.quantity} {product.unit}s
                </div>
                <div className="text-sm text-gray-500">in stock</div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">
                    Harvest Date
                  </span>
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  {new Date(product.harvestDate).toLocaleDateString()}
                </div>
                <div className="text-sm text-gray-500">freshly picked</div>
              </div>
            </div>

            {/* Category */}
            <div className="mb-6">
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium capitalize">
                {product.category}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </button>
              <button
                onClick={onClose}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailModal;
