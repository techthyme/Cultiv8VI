// import React from "react";

// interface MarketPageProps {
//   params: { slug: string[] };
// }

// const MarketPage = ({}: MarketPageProps) => {
//   return <div>MarketPage</div>;
// };

// export default MarketPage;


"use client";
import React, { useState } from "react";
import Marketplace from "@/components/client/market-place";

const MarketPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <Marketplace
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      showFilters={showFilters}
      setShowFilters={setShowFilters}
    />
  );
};

export default MarketPage;