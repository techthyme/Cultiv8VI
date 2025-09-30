import { NextResponse } from "next/server";
import {
  Product,
  ProductCategory,
  ProductUnit,
  FarmingMethod,
  Farm,
  UserType,
} from "@/types";

// Sample farm for products
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
  images: [],
  coverImage: "",
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

// Sample produce data
const produceData: Product[] = [
  {
    id: "1",
    cartId: "1",
    quantity: 2,
    farmId: "farm_1",
    farm: sampleFarm,
    name: "Organic Tomatoes",
    description: "Fresh, juicy organic tomatoes grown in Virgin Islands soil.",
    price: 4.5,
    color: "blue",
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
];

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return NextResponse.json({ produce: produceData });
}
