"use client";
import React, { useState } from "react";
import { Product } from "@/types";
import ProductGrid from "@/components/ui/product-grid";
import ProductDetailModal from "@/components/ui/modal";

interface MarketplaceProps {
  products: Product[];
}

const Marketplace: React.FC<MarketplaceProps> = ({ products }) => {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [selectedCategory, setSelectedCategory] = useState("all");
  // const [showFilters, setShowFilters] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log("Products in Marketplace", products);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product: Product) => {
    console.log("Add to cart", product);
    // Add your cart logic here
  };

  return (
    <>
      <ProductGrid
        products={products}
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
