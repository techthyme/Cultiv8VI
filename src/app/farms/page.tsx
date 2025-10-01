// src/app/market/page.tsx
import { GetFarmsResponse } from "@/types/api";
import FarmsClient from "@/components/client/farms";
import { mockFarms } from "@/data";

// Server-side fetch from API route
async function getFarms(): Promise<GetFarmsResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/farms`, {
    cache: "no-store", // ensures fresh data each time
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function FarmPage() {
  return (
    <div>
      <FarmsClient farms={mockFarms} />
    </div>
  );
}
