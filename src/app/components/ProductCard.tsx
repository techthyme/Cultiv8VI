
import React from 'react'
import { MapPin, Heart } from 'lucide-react'
import AddToCart from './AddToCart'

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

interface ProductCardProps {
  product: Produce;
  onAddToCart: (product: Produce) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 overflow-hidden">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3 flex flex-col space-y-1">
          {product.organic && (
            <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
              Organic
            </span>
          )}
          {product.inSeason && (
            <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              In Season
            </span>
          )}
        </div>
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow hover:bg-red-50 transition">
          <Heart className="h-5 w-5 text-gray-400 hover:text-red-500" />
        </button>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">
            {product.name}
          </h3>
          <div className="text-right">
            <div className="text-lg font-bold text-green-600">
              ${product.price.toFixed(2)}
            </div>
            <div className="text-sm text-gray-500">per {product.unit}</div>
          </div>
        </div>

        <div className="flex items-center text-sm text-gray-600 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span>
            {product.farmer} • {product.location}
          </span>
        </div>

        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-600">
            {product.quantity} {product.unit} available
          </span>
          <span className="text-sm text-gray-500">
            Harvested {new Date(product.harvestDate).toLocaleDateString()}
          </span>
        </div>

        <AddToCart product={product} onAddToCart={onAddToCart} />
      </div>
    </div>
  )
}

export default ProductCard