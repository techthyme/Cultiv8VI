"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Leaf } from "lucide-react";
import HomePage from "./HomePage";

const SearchParamsHandler = ({
  setActiveTab,
}: {
  setActiveTab: (tab: string) => void;
}) => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const tabParam = searchParams.get("activeTab");
    if (
      tabParam &&
      ["home"].includes(tabParam)
    ) {
      setActiveTab(tabParam);
    }
  }, [searchParams, setActiveTab]);

  return null;
};

const Cultiv8VIClient = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-gray-50">
      <Suspense fallback={null}>
        <SearchParamsHandler setActiveTab={setActiveTab} />
      </Suspense>

      {activeTab === "home" && <HomePage />}
    </div>
  );
};

export default Cultiv8VIClient;