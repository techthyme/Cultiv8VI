"use client";
import React from "react";
import Image from "next/image";
import { ShoppingCart, Star, MapPin, Clock, Leaf } from "lucide-react";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onProductClick?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onProductClick,
}) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  const handleCardClick = () => {
    if (onProductClick) {
      onProductClick(product);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group border border-gray-100"
      onClick={handleCardClick}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={200}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.organic && (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
              <Leaf className="h-3 w-3" />
              Organic
            </span>
          )}
          {product.inSeason && (
            <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
              In Season
            </span>
          )}
        </div>

        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          className="absolute top-3 right-3 bg-white/90 hover:bg-white text-green-600 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <ShoppingCart className="h-4 w-4" />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Category & Harvest Date */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
          <span className="capitalize bg-gray-100 px-2 py-1 rounded">
            {product.category}
          </span>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>Harvested {formatDate(product.harvestDate)}</span>
          </div>
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">
          {product.name}
        </h3>

        {/* Farmer Info */}
        {product.farmer && (
          <div className="flex items-center text-sm text-gray-600 mb-3">
            <MapPin className="h-3 w-3 mr-1" />
            <span>{product.farmer}, {product.farmerLocation}</span>
          </div>
        )}

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">
          {product.description}
        </p>

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-green-600">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-xs text-gray-500">per {product.unit}</span>
          </div>
          
          <button
            onClick={handleAddToCart}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-2"
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </button>
        </div>

        {/* Stock Info */}
        <div className="mt-3 text-xs text-gray-500">
          {product.quantity > 0 ? (
            <span className="text-green-600">
              {product.quantity} {product.unit}s available
            </span>
          ) : (
            <span className="text-red-500">Out of stock</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;