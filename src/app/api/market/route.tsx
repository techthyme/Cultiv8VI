import { NextResponse } from "next/server";
import {
  MarketResponse,
} from "@/types";
import { mockFarms, mockProducts } from "@/data";

// --- Config ---
export const dynamic = "force-dynamic"; // don't cache this route during dev

// --- Handler ---
export async function GET() {
  // In a real implementation, you would parse query parameters and filter data
  // For now, return sample data

  const body: MarketResponse = {
    products: mockProducts,
    farms: [mockFarms[0]],
    page: 1,
    pageSize: 12,
    total: mockProducts.length,
    totalPages: 1,
    appliedFilters: {},
  };


  return NextResponse.json(body, {
    headers: { "Cache-Control": "no-store" },
  });
}
