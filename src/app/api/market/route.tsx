import { NextRequest, NextResponse } from "next/server";
import { Product, MarketQuery, ProductResult,ProductCategory, SortKey, MarketResponse } from "@/types";
// --- Config ---
export const dynamic = "force-dynamic"; // don't cache this route during dev





// --- Helpers for parsing query params ---
const toNum = (v: string | null, fallback?: number) => {
  if (v == null || v.trim() === "") return fallback;
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
};

const toBool = (v: string | null): boolean | undefined => {
  if (v === "true") return true;
  if (v === "false") return false;
  return undefined; // don't apply filter if not present
};

const isCategory = (v: string | null): v is ProductCategory =>
  v === "produce" || v === "herbs" || v === "fruits" || v === "vegetables";

const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

// --- Data access placeholder (plug your DB or data source here later) ---
async function queryMarket(_q: MarketQuery): Promise<{ items: ProductResult[]; total: number }> {
  // TODO: Replace with real data access (Prisma/SQL, file, external API…)
  // This stub returns an empty catalog so you can wire UI safely first.
  return { items: [], total: 0 };
}

// --- Handler ---
export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams;

  const q = sp.get("q")?.trim() || undefined;

  const rawCategory = sp.get("category");
  const category =
    rawCategory && rawCategory !== "all" && isCategory(rawCategory)
      ? (rawCategory as ProductCategory)
      : undefined;

  const location = (sp.get("location") || undefined)?.trim();

  const minPrice = toNum(sp.get("minPrice"));
  const maxPrice = toNum(sp.get("maxPrice"));

  // Optional flags (only applied if provided explicitly)
  const inSeason = toBool(sp.get("inSeason"));
  const organic = toBool(sp.get("organic"));
  const certified = toBool(sp.get("certified"));

  const sortParam = sp.get("sort");
  const sort: SortKey =
    sortParam === "price_asc" || sortParam === "price_desc" || sortParam === "rating_desc"
      ? sortParam
      : "newest";

  const page = clamp(toNum(sp.get("page"), 1)!, 1, 10_000);
  const pageSize = clamp(toNum(sp.get("pageSize"), 12)!, 1, 50);

  // Build the normalized query object
  const query: MarketQuery = {
    q,
    category,
    location,
    minPrice,
    maxPrice,
    inSeason,
    organic,
    certified,
    sort,
    page,
    pageSize,
  };

  // Fetch items (empty for now)
  const { items, total } = await queryMarket(query);

  // Paginate the (future) full result set: your real implementation
  // should apply pagination *in the data layer* for performance.
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

   const sampleProducts: Product[] = [
    {
      id: "1",
      farm_id: "1",
      name: "Organic Tomatoes",
      description: "Fresh, vine-ripened organic tomatoes grown in rich Virgin Islands soil. Perfect for salads, sauces, and cooking.",
      farmer: "Green Valley Farm",
      farmerLocation: "St. Thomas",
      price: 4.50,
      unit: "lb",
      quantity: 50,
      image: "https://images.unsplash.com/photo-1546470427-e42146a5e5d3?w=300&h=200&fit=crop",
      category: ProductCategory.vegetables,
      inSeason: true,
      organic: true,
      harvestDate: "2024-08-25",
    },
    {
      id: "2", 
      farm_id: "2",
      name: "Fresh Mangoes",
      description: "Sweet, juicy mangoes harvested at peak ripeness from our tropical orchards.",
      farmer: "Tropical Paradise Farm",
      farmerLocation: "St. John",
      price: 6.00,
      unit: "lb",
      quantity: 25,
      image: "https://images.unsplash.com/photo-1553279091-75a834c48d99?w=300&h=200&fit=crop",
      category: ProductCategory.fruits,
      inSeason: true,
      organic: false,
      harvestDate: "2024-08-26",
    },
    {
      id: "3",
      farm_id: "3", 
      name: "Fresh Basil",
      description: "Aromatic basil leaves perfect for cooking, cocktails, and garnishing.",
      farmer: "Herb Haven",
      farmerLocation: "St. Croix",
      price: 3.25,
      unit: "bunch",
      quantity: 15,
      image: "https://images.unsplash.com/photo-1618375569909-3c8616cf05d2?w=300&h=200&fit=crop",
      category: ProductCategory.herbs,
      inSeason: true,
      organic: true,
      harvestDate: "2024-08-27",
    },
    {
      id: "4",
      farm_id: "1",
      name: "Sweet Peppers",
      description: "Colorful bell peppers in red, yellow, and orange varieties.",
      farmer: "Green Valley Farm", 
      farmerLocation: "St. Thomas",
      price: 5.00,
      unit: "lb",
      quantity: 30,
      image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=300&h=200&fit=crop",
      category: ProductCategory.vegetables,
      inSeason: true,
      organic: true,
      harvestDate: "2024-08-24",
    },
  ];
/**
 * {
    items,
    page,
    pageSize,
    total,
    totalPages,
    applied: {
      q,
      category,
      location,
      minPrice,
      maxPrice,
      inSeason,
      organic,
      certified,
      sort,
    },
  }
 */
  const body: MarketResponse = {
    products:sampleProducts
  };
  await new Promise((r) => setTimeout(r, 1500)); // simulate load

  return NextResponse.json(body, {
    headers: { "Cache-Control": "no-store" },
  });
}
