"use client";
import React, { useState } from "react";
import ProductGrid from "@/components/ui/product-grid";
import ProductDetailModal from "@/components/ui/product-detail-modal";
import { Product, ProductCategory } from "@/types";

interface MarketplaceProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
}

const Marketplace: React.FC<MarketplaceProps> = ({
  // searchTerm,
  // setSearchTerm,
  // selectedCategory,
  // setSelectedCategory,
  // showFilters,
  // setShowFilters,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Sample products data - in a real app this would come from an API
  const sampleProducts: Product[] = [
    {
      id: "1",
      farm_id: "1",
      name: "Organic Tomatoes",
      description: "Fresh, vine-ripened organic tomatoes grown in rich Virgin Islands soil. Perfect for salads, sauces, and cooking.",
      farmer: "Green Valley Farm",
      farmerLocation: "St. Thomas",
      price: 4.50,
      unit: "lb",
      quantity: 50,
      image: "https://images.unsplash.com/photo-1546470427-e42146a5e5d3?w=300&h=200&fit=crop",
      category: ProductCategory.vegetables,
      inSeason: true,
      organic: true,
      harvestDate: "2024-08-25",
    },
    {
      id: "2", 
      farm_id: "2",
      name: "Fresh Mangoes",
      description: "Sweet, juicy mangoes harvested at peak ripeness from our tropical orchards.",
      farmer: "Tropical Paradise Farm",
      farmerLocation: "St. John",
      price: 6.00,
      unit: "lb",
      quantity: 25,
      image: "https://images.unsplash.com/photo-1553279091-75a834c48d99?w=300&h=200&fit=crop",
      category: ProductCategory.fruits,
      inSeason: true,
      organic: false,
      harvestDate: "2024-08-26",
    },
    {
      id: "3",
      farm_id: "3", 
      name: "Fresh Basil",
      description: "Aromatic basil leaves perfect for cooking, cocktails, and garnishing.",
      farmer: "Herb Haven",
      farmerLocation: "St. Croix",
      price: 3.25,
      unit: "bunch",
      quantity: 15,
      image: "https://images.unsplash.com/photo-1618375569909-3c8616cf05d2?w=300&h=200&fit=crop",
      category: ProductCategory.herbs,
      inSeason: true,
      organic: true,
      harvestDate: "2024-08-27",
    },
    {
      id: "4",
      farm_id: "1",
      name: "Sweet Peppers",
      description: "Colorful bell peppers in red, yellow, and orange varieties.",
      farmer: "Green Valley Farm", 
      farmerLocation: "St. Thomas",
      price: 5.00,
      unit: "lb",
      quantity: 30,
      image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=300&h=200&fit=crop",
      category: ProductCategory.vegetables,
      inSeason: true,
      organic: true,
      harvestDate: "2024-08-24",
    },
  ];

  const handleAddToCart = (product: Product) => {
    // In a real app, this would add to cart state or call an API
    console.log("Adding to cart:", product.name);
    alert(`Added ${product.name} to cart!`);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <ProductGrid
        products={sampleProducts}
        onAddToCart={handleAddToCart}
        onProductClick={handleProductClick}
      />
      
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onAddToCart={handleAddToCart}
        />
      )}
    </>
  );
};

export default Marketplace;