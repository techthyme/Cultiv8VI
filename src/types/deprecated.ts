import { ProductCategory } from ".";


export type SortKey = "newest" | "price_asc" | "price_desc" | "rating_desc";


export type MarketQuery = {
  q?: string;
  category?: ProductCategory;
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  inSeason?: boolean;
  organic?: boolean;
  certified?: boolean; // farm-level filter
  sort?: SortKey;
  page: number;
  pageSize: number;
};

