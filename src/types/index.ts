export interface Person {
  id: string;
}



export type MarketResponse = {
  products: Product[];
  items?: ProductResult[];
  page?: number;
  pageSize?: number;
  total?: number;
  totalPages?: number;
  applied?: Omit<MarketQuery, "page" | "pageSize">;
};


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

// What each item looks like in the response: Product + minimal farm info
export type ProductResult = Product & {
  farm: Pick<Farm, "id" | "name" | "location" | "rating" | "image" | "certified">;
};




export interface Farm {
  id: string;
  name: string;
  description: string;
  location: string;
  rating: number;
  image: string;
  certified: boolean;
  specialties: string[];
  contact: {
    phone: string;
    email: string;
  };
  products: Product[];
}

// FIXME: how shoud we implement this alongside the ProductCategory enum
// interface Category {
//   id: string;
//   name: string;
//   icon: string;
// }

export interface Product {
  id: string;
  cart_id?: string;
  farm_id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  quantity: number;
  image: string;
  category: ProductCategory;
  inSeason: boolean;
  organic: boolean;
  harvestDate: string;
  farmer?: string;
  farmerLocation?: string;
}

export enum ProductCategory {
  produce = "produce",
  herbs = "herbs",
  fruits = "fruits",
  vegetables = "vegetables"
}


export interface Session {
  is_authenticated: boolean;
}

export interface Cart {
  products: Product[];  
}






