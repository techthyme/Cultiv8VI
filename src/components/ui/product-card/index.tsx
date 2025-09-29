// import React from "react";
// import Image from "next/image";
// import { MapPin, Heart } from "lucide-react";
// import { Product } from "@/types";

// interface ProductCardProps {
//   product: Product;
//   onAddToCart: (product: Product) => void;
//   onViewDetails?: (product: Product) => void;
// }

// const ProductCard: React.FC<ProductCardProps> = ({
//   product,
//   onAddToCart,
//   onViewDetails,
// }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 overflow-hidden">
//       <div className="relative">
//         <Image
//           src={product.image}
//           alt={product.name}
//           width={400}
//           height={192}
//           className="w-full h-48 object-cover"
//         />
//         <div className="absolute top-3 left-3 flex flex-col space-y-1">
//           {product.organic && (
//             <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
//               Organic
//             </span>
//           )}
//           {product.inSeason && (
//             <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
//               In Season
//             </span>
//           )}
//         </div>
//         <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow hover:bg-red-50 transition">
//           <Heart className="h-5 w-5 text-gray-400 hover:text-red-500" />
//         </button>
//       </div>

//       <div className="p-4">
//         <div className="flex items-start justify-between mb-2">
//           <h3 className="text-lg font-semibold text-gray-900">
//             {product.name}
//           </h3>
//           <div className="text-right">
//             <div className="text-lg font-bold text-green-600">
//               ${product.price.toFixed(2)}
//             </div>
//             <div className="text-sm text-gray-500">per {product.unit}</div>
//           </div>
//         </div>

//         <div className="flex items-center text-sm text-gray-600 mb-2">
//           <MapPin className="h-4 w-4 mr-1" />
//           <span>
//             {/* FIXME: handle farm location value */}
//             {product.farmer} • product.farmerLocation
//           </span>
//         </div>

//         <div className="flex items-center justify-between mb-3">
//           <span className="text-sm text-gray-600">
//             {product.quantity} {product.unit} available
//           </span>
//           <span className="text-sm text-gray-500">
//             Harvested {new Date(product.harvestDate).toLocaleDateString()}
//           </span>
//         </div>

//         <div className="flex gap-2">
//           <button
//             onClick={() => onAddToCart(product)}
//             className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300 font-medium"
//           >
//             Add to Cart
//           </button>
//           {onViewDetails && (
//             <button
//               onClick={() => onViewDetails(product)}
//               className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300 text-sm font-medium"
//             >
//               View Details
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { FarmingMethod, Product } from "@/types";

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
  const [isFavorited, setIsFavorited] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  const handleViewDetails = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onProductClick) {
      onProductClick(product);
    }
  };

  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorited(!isFavorited);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      {/* Product Image */}
      <div className="relative">
        <Image
          src={product.images[0]}
          alt={product.name}
          width={250}
          height={160}
          className="w-full h-40 object-cover"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.farmingMethod == FarmingMethod.ORGANIC && (
            <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">
              Organic
            </span>
          )}
          {product.quantity && product.quantity > 0 && (
            <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">
              In Stock
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={handleFavoriteToggle}
          className="absolute top-2 right-2 bg-white/90 hover:bg-white p-1.5 rounded-full shadow-sm transition-colors"
        >
          <Heart
            className={`h-4 w-4 ${
              isFavorited ? "fill-red-500 text-red-500" : "text-gray-400"
            }`}
          />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-3">
        {/* Product Name */}
        <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-1">
          {product.name}
        </h3>

        {/* Price */}
        <div className="text-lg font-bold text-green-600 mb-1">
          ${product.price.toFixed(2)}
          <span className="text-xs text-gray-500 font-normal ml-1">
            per {product.unit}
          </span>
        </div>

        {/* Farmer Info */}
        <div className="text-xs text-gray-600 mb-0.5">
          🏪 {product.farm.farmerName}
        </div>
        <div className="text-xs text-gray-500 mb-1">
          📍 {product.farm.locationName}
        </div>

        {/* Stock Info */}
        <div className="text-xs text-gray-500 mb-2">
          📦 {product.quantity} {product.unit} available
        </div>

        {/* Harvest Date */}
        {product.harvestDate && (
          <div className="text-xs text-gray-500 mb-3">
            📅 Harvested {formatDate(product.harvestDate)}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-1.5 px-3 rounded-md text-xs font-medium transition-colors"
          >
            Add to Cart
          </button>
          <button
            onClick={handleViewDetails}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-1.5 px-3 rounded-md text-xs font-medium transition-colors"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
