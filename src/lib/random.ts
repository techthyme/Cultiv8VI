import { ProductCategory, MarketQuery, Product } from "@/types";



// --- Helpers for parsing query params ---
export const toNum = (v: string | null, fallback?: number) => {
  if (v == null || v.trim() === "") return fallback;
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
};

export const toBool = (v: string | null): boolean | undefined => {
  if (v === "true") return true;
  if (v === "false") return false;
  return undefined; // don't apply filter if not present
};

export const isCategory = (v: string | null): v is ProductCategory =>
  v === "produce" || v === "herbs" || v === "fruits" || v === "vegetables";

export const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

// --- Data access placeholder (plug your DB or data source here later) ---
export async function queryMarket(q: MarketQuery): Promise<{ items: Product[]; total: number }> {
  console.log("market query: ", q)
  // TODO: Replace with real data access (Prisma/SQL, file, external API…)
  // This stub returns an empty catalog so you can wire UI safely first.
  return { items: [], total: 0 };
}
