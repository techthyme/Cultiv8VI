// src/app/market/page.tsx
"use client";
import { mockProducts } from "@/data";
import Marketplace from "@/components/client/market-place";

export default function MarketPage() {
  return (
    <div>
      <Marketplace products={mockProducts} />
    </div>
  );
}
