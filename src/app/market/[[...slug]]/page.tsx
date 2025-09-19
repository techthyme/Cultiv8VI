// src/app/market/page.tsx
import Marketplace from "@/components/client/market-place";
import { Product } from "@/types";

// Server-side fetch from API route
async function getProducts(): Promise<Product[]> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/market`, {
    cache: "no-store", // ensures fresh data each time
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function MarketPage() {
  const products = await getProducts();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Marketplace</h1>
      <Marketplace products={products} />
    </div>
  );
}
