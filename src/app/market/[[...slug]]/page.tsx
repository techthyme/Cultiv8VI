"use client";
import React from "react";
import { Product, ProductCategory } from "@/types";
import ProductGrid from "@/components/ui/product-grid";
import { useCart } from "@/context/cart";

interface MarketPageProps {
  params: { slug: string[] };
}

const MarketPage = ({}: MarketPageProps) => {
  const { addItemToCart } = useCart();

  // Sample Virgin Islands produce data
  const sampleProducts: Product[] = [
    {
      id: "1",
      farm_id: "1",
      name: "Organic Cherry Tomatoes",
      description: "Sweet, vine-ripened cherry tomatoes grown in the tropical climate of St. Thomas. Perfect for salads and garnishes.",
      price: 4.50,
      unit: "lb",
      quantity: 25,
      image: "https://images.unsplash.com/photo-1592841200221-afaf8c952c2a?w=400&h=300&fit=crop",
      category: ProductCategory.vegetables,
      inSeason: true,
      organic: true,
      harvestDate: "2025-09-12",
      farmer: "Green Valley Farm",
      farmerLocation: "St. Thomas"
    },
    {
      id: "2",
      farm_id: "2",
      name: "Caribbean Mangoes",
      description: "Juicy, tropical mangoes harvested at peak ripeness. A taste of paradise in every bite.",
      price: 6.00,
      unit: "lb",
      quantity: 30,
      image: "https://images.unsplash.com/photo-1553279768-865429fe261a?w=400&h=300&fit=crop",
      category: ProductCategory.fruits,
      inSeason: true,
      organic: false,
      harvestDate: "2025-09-10",
      farmer: "Tropical Groves",
      farmerLocation: "St. John"
    },
    {
      id: "3",
      farm_id: "3",
      name: "Fresh Basil",
      description: "Aromatic basil leaves perfect for cooking. Grown using sustainable farming practices in Virgin Islands soil.",
      price: 3.25,
      unit: "bunch",
      quantity: 40,
      image: "https://images.unsplash.com/photo-1618978692446-3dc5cdcc7d33?w=400&h=300&fit=crop",
      category: ProductCategory.herbs,
      inSeason: true,
      organic: true,
      harvestDate: "2025-09-14",
      farmer: "Island Herbs Co.",
      farmerLocation: "St. Croix"
    },
    {
      id: "4",
      farm_id: "1",
      name: "Sweet Bell Peppers",
      description: "Colorful, crisp bell peppers in red, yellow, and green varieties. Rich in vitamins and perfect for any dish.",
      price: 5.75,
      unit: "lb",
      quantity: 20,
      image: "https://images.unsplash.com/photo-1601136216363-4845c3c3fce1?w=400&h=300&fit=crop",
      category: ProductCategory.vegetables,
      inSeason: true,
      organic: false,
      harvestDate: "2025-09-11",
      farmer: "Green Valley Farm",
      farmerLocation: "St. Thomas"
    },
    {
      id: "5",
      farm_id: "4",
      name: "Virgin Islands Plantains",
      description: "Green plantains perfect for frying or cooking. A staple of Caribbean cuisine grown locally.",
      price: 2.50,
      unit: "lb",
      quantity: 35,
      image: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=400&h=300&fit=crop",
      category: ProductCategory.fruits,
      inSeason: true,
      organic: false,
      harvestDate: "2025-09-13",
      farmer: "Caribbean Farms",
      farmerLocation: "St. Thomas"
    },
    {
      id: "6",
      farm_id: "5",
      name: "Organic Cilantro",
      description: "Fresh cilantro with a bright, citrusy flavor. Essential for authentic Caribbean and Latin dishes.",
      price: 2.75,
      unit: "bunch",
      quantity: 45,
      image: "https://images.unsplash.com/photo-1566378955163-ebc2b73b6bd8?w=400&h=300&fit=crop",
      category: ProductCategory.herbs,
      inSeason: true,
      organic: true,
      harvestDate: "2025-09-14",
      farmer: "Sunrise Organics",
      farmerLocation: "St. John"
    },
    {
      id: "7",
      farm_id: "6",
      name: "Caribbean Coconuts",
      description: "Fresh coconuts straight from the palm. Great for coconut water and meat for cooking.",
      price: 4.00,
      unit: "each",
      quantity: 15,
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop",
      category: ProductCategory.fruits,
      inSeason: true,
      organic: true,
      harvestDate: "2025-09-09",
      farmer: "Palm Grove Estate",
      farmerLocation: "St. Croix"
    },
    {
      id: "8",
      farm_id: "3",
      name: "Organic Lettuce Mix",
      description: "Mixed greens including romaine, butter lettuce, and arugula. Perfect for fresh salads.",
      price: 3.50,
      unit: "bag",
      quantity: 28,
      image: "https://images.unsplash.com/photo-1583429127844-d253b32c0cdf?w=400&h=300&fit=crop",
      category: ProductCategory.vegetables,
      inSeason: true,
      organic: true,
      harvestDate: "2025-09-13",
      farmer: "Island Herbs Co.",
      farmerLocation: "St. Croix"
    },
    {
      id: "9",
      farm_id: "7",
      name: "Hot Scotch Bonnet Peppers",
      description: "Fiery hot peppers essential for authentic Caribbean cooking. Handle with care!",
      price: 8.00,
      unit: "lb",
      quantity: 12,
      image: "https://images.unsplash.com/photo-1525207525107-9b8e5c4c5f71?w=400&h=300&fit=crop",
      category: ProductCategory.vegetables,
      inSeason: true,
      organic: false,
      harvestDate: "2025-09-10",
      farmer: "Spice Island Farm",
      farmerLocation: "St. Thomas"
    },
    {
      id: "10",
      farm_id: "2",
      name: "Fresh Papayas",
      description: "Sweet, orange-fleshed papayas rich in vitamins. Perfect for breakfast or dessert.",
      price: 3.75,
      unit: "lb",
      quantity: 22,
      image: "https://images.unsplash.com/photo-1571770420052-bf9c2d6d5cf0?w=400&h=300&fit=crop",
      category: ProductCategory.fruits,
      inSeason: true,
      organic: false,
      harvestDate: "2025-09-12",
      farmer: "Tropical Groves",
      farmerLocation: "St. John"
    },
    {
      id: "11",
      farm_id: "8",
      name: "Thyme Sprigs",
      description: "Fragrant thyme perfect for seasoning meats and vegetables. A staple in Caribbean cuisine.",
      price: 2.25,
      unit: "bunch",
      quantity: 35,
      image: "https://images.unsplash.com/photo-1618440165577-f9b7aa0a5ccf?w=400&h=300&fit=crop",
      category: ProductCategory.herbs,
      inSeason: true,
      organic: true,
      harvestDate: "2025-09-14",
      farmer: "Mountain View Herbs",
      farmerLocation: "St. Croix"
    },
    {
      id: "12",
      farm_id: "9",
      name: "Virgin Islands Avocados",
      description: "Creamy, large avocados perfect for guacamole or slicing. Rich in healthy fats.",
      price: 7.50,
      unit: "lb",
      quantity: 18,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      category: ProductCategory.fruits,
      inSeason: true,
      organic: true,
      harvestDate: "2025-09-11",
      farmer: "Coastal Orchards",
      farmerLocation: "St. John"
    }
  ];

  const handleAddToCart = (product: Product) => {
    addItemToCart({
      ...product,
      cart_id: `cart-${Date.now()}-${product.id}`
    });
  };

  const handleProductClick = (product: Product) => {
    console.log("Product clicked:", product.name);
    // Future: Navigate to product detail page
  };

  return (
    <ProductGrid
      products={sampleProducts}
      onAddToCart={handleAddToCart}
      onProductClick={handleProductClick}
      title="Virgin Islands Marketplace"
      subtitle="Fresh produce from local farmers across St. Thomas, St. John, and St. Croix"
    />
  );
};

export default MarketPage;
