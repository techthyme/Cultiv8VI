
import { Product, Farm } from "./index"
export interface GetProductsResponse {
  products: Product[]
}

export interface GetProductsRequest {
  query: Query;
}

export interface GetFarmsResponse {
  farms: Farm[]
}

export interface GetFarmsRequest {
  query: Query;
}


export interface Query {
  page: number;
  terms: Term[];
  perPage: number;
}

interface Term {
  key: string;
  value: string;
}
