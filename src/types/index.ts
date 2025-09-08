

import { ProductCategory, UnitType } from '@prisma/client'

export interface CreateFarmData {
  name: string
  description?: string
  location?: {
    street?: string
    town?: string
    city?: string
    state?: string
    postal_code?: string
    lat?: number
    lng?: number
  }
}

export interface CreateProductData {
  name: string
  description?: string
  category: ProductCategory
  price_per_unit: number
  unit_type: UnitType
  available_quantity: number
  harvest_date?: Date
  images?: string[]
  is_organic: boolean
  is_active: boolean
  farm_id: string
}

export interface FarmWithLocation {
  id: string
  name: string
  description: string | null
  created_at: Date
  owner_id: string
  location?: {
    id: string
    street: string | null
    town: string | null
    city: string | null
    state: string | null
    postal_code: string | null
    lat: number | null
    lng: number | null
  } | null
}

export interface ProductWithFarm {
  id: string
  name: string
  description: string | null
  category: ProductCategory
  price_per_unit: number
  unit_type: UnitType
  available_quantity: number
  harvest_date: Date | null
  images: string | null
  is_organic: boolean
  is_active: boolean
  created_at: Date
  farm: {
    id: string
    name: string
  }
}