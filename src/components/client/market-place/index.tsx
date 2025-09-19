"use client";
import React, { useState } from "react";
import { Product } from "@/types";
import ProductGrid from "@/components/ui/product-grid";

interface MarketplaceProps {
  products: Product[];
}

const Marketplace: React.FC<MarketplaceProps> = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
console.log("Products in Marketplace", products);
  return (
    <ProductGrid
      products={products}
      onAddToCart={(p) => console.log("Add to cart", p)}
      onProductClick={(p) => console.log("View product", p)}
    />
  );
};

export default Marketplace;
