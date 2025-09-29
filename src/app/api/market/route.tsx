import { NextResponse } from "next/server";
import {
  Product,
  ProductCategory,
  ProductUnit,
  MarketResponse,
  FarmingMethod,
  Farm,
  UserType,
} from "@/types";

// --- Config ---
export const dynamic = "force-dynamic"; // don't cache this route during dev

// Sample farm data
const sampleFarm: Farm = {
  id: "farm_1",
  name: "Green Valley Farm",
  description: "A family-owned organic farm",
  address: {
    street: "123 Farm Road",
    city: "Charlotte Amalie",
    state: "VI",
    zipCode: "00802",
    country: "US",
  },
  rating: 4.8,
  reviewCount: 150,
  images: [
    "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=300&h=200&fit=crop",
  ],
  coverImage:
    "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=300&h=200&fit=crop",
  certified: true,
  certifications: [],
  specialties: ["Organic Vegetables"],
  ownerId: "owner_1",
  owner: {
    id: "owner_1",
    email: "owner@greenvalley.vi",
    username: "greenvalley",
    firstName: "John",
    lastName: "Smith",
    userType: UserType.FARMER,
    isVerified: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  contact: {
    phone: "(340) 555-0123",
    email: "info@greenvalleyfarm.vi",
  },
  products: [],
  deliveryOptions: [],
  paymentMethods: [],
  isActive: true,
  createdAt: "2024-01-01T00:00:00Z",
  updatedAt: "2024-01-01T00:00:00Z",
};

// --- Handler ---
export async function GET() {
  // In a real implementation, you would parse query parameters and filter data
  // For now, return sample data

  const sampleProducts: Product[] = [
    {
      id: "1",
      cart_id: "2",
      farmId: "farm_1",
      farm: sampleFarm,
      name: "Organic Tomatoes",
      description:
        "Fresh, vine-ripened organic tomatoes grown in rich Virgin Islands soil.",
      price: 4.5,
      quantity: 2,
      unit: ProductUnit.POUND,
      quantityAvailable: 50,
      images: [
        "https://images.unsplash.com/photo-1546470427-e42146a5e5d3?w=300&h=200&fit=crop",
      ],
      primaryImage:
        "https://images.unsplash.com/photo-1546470427-e42146a5e5d3?w=300&h=200&fit=crop",
      category: ProductCategory.VEGETABLES,
      tags: ["organic", "fresh"],
      inSeason: true,
      farmingMethod: FarmingMethod.ORGANIC,
      isActive: true,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "2",
      cart_id: "23",
      farmId: "farm_1",
      farm: sampleFarm,
      name: "Fresh Basil",
      description: "Aromatic basil leaves perfect for cooking.",
      price: 3.25,
      quantity: 2,
      unit: ProductUnit.BUNCH,
      quantityAvailable: 15,
      images: [
        "https://images.unsplash.com/photo-1618375569909-3c8616cf05d2?w=300&h=200&fit=crop",
      ],
      primaryImage:
        "https://images.unsplash.com/photo-1618375569909-3c8616cf05d2?w=300&h=200&fit=crop",
      category: ProductCategory.HERBS,
      tags: ["fresh", "aromatic"],
      inSeason: true,
      farmingMethod: FarmingMethod.ORGANIC,
      isActive: true,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
  ];

  const body: MarketResponse = {
    products: sampleProducts,
    farms: [sampleFarm],
    page: 1,
    pageSize: 12,
    total: sampleProducts.length,
    totalPages: 1,
    appliedFilters: {},
  };

  await new Promise((r) => setTimeout(r, 500)); // simulate load

  return NextResponse.json(body, {
    headers: { "Cache-Control": "no-store" },
  });
}
