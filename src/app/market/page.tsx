// src/app/market/page.tsx
import { MarketResponse } from "@/types";
import Marketplace from "@/components/client/market-place";

// Server-side fetch from API route
async function getProducts(): Promise<MarketResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/market`, {
    cache: "no-store", // ensures fresh data each time
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function MarketPage() {
  const mresponse = await getProducts();

  return (
    <div>
      <Marketplace products={mresponse.products} />
    </div>
  );
}
