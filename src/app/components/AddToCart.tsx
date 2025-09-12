import React from 'react'

interface Produce {
  id: number;
  name: string;
  description: string;
  farmer: string;
  farmerLocation: string;
  price: number;
  unit: string;
  quantity: number;
  image: string;
  category: string;
  inSeason: boolean;
  organic: boolean;
  harvestDate: string;
}

interface AddToCartProps {
  product: Produce;
  onAddToCart: (product: Produce) => void;
}

const AddToCart: React.FC<AddToCartProps> = ({ product, onAddToCart }) => {
  return (
    <button
      onClick={() => onAddToCart(product)}
      className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300 font-medium"
    >
      Add to Cart
    </button>
  )
}

export default AddToCart