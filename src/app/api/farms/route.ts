import { NextResponse } from 'next/server';
import {Farm, DeliveryOption, PaymentMethod, UserType, User} from "@/types"

// Sample user/owner data
const sampleOwner: User = {
  id: "owner_1",
  email: "owner@greenvalley.vi",
  username: "greenvalley",
  firstName: "John",
  lastName: "Smith",
  userType: UserType.FARMER,
  isVerified: true,
  createdAt: "2024-01-01T00:00:00Z",
  updatedAt: "2024-01-01T00:00:00Z"
};

// Sample farms data with minimal structure
const farmsData: Farm[] = [
  {
    id: "farm_1",
    name: "Green Valley Farm",
    description: "A family-owned organic farm specializing in fresh vegetables and herbs.",
    address: {
      street: "123 Farm Road",
      city: "Charlotte Amalie",
      state: "VI",
      zipCode: "00802",
      country: "US"
    },
    rating: 4.8,
    reviewCount: 150,
    images: ["https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=300&h=200&fit=crop"],
    coverImage: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=300&h=200&fit=crop",
    certified: true,
    certifications: [],
    specialties: ["Organic Vegetables", "Herbs", "Tropical Fruits"],
    ownerId: "owner_1",
    owner: sampleOwner,
    contact: {
      phone: "(340) 555-0123",
      email: "info@greenvalleyfarm.vi"
    },
    deliveryOptions: [DeliveryOption.FARM_PICKUP, DeliveryOption.LOCAL_DELIVERY],
    paymentMethods: [PaymentMethod.CASH, PaymentMethod.CREDIT_CARD],
    isActive: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
    products: [] // Products would be loaded separately in real implementation
  }
];

export async function GET() {
  // Simulate some processing time
  await new Promise(resolve => setTimeout(resolve, 500));

  return NextResponse.json({ farms: farmsData });
}