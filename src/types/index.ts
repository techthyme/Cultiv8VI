export interface Person {
  id: string;
}


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






