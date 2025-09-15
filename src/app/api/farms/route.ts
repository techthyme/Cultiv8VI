import { NextResponse } from 'next/server';
import {Farm, Product, ProductCategory} from "@/types"
// Sample farms data with their products
const farmsData: Farm[] = [
  {
    id: "some_id",
    name: "Green Valley Farm",
    description: "A family-owned organic farm specializing in fresh vegetables and herbs. We've been serving the Virgin Islands community for over 20 years with sustainable farming practices.",
    location: "St. Thomas",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=300&h=200&fit=crop",
    certified: true,
    specialties: ["Organic Vegetables", "Herbs", "Tropical Fruits"],
    contact: {
      phone: "(340) 555-0123",
      email: "info@greenvalleyfarm.vi"
    },
    products: [
      {
        id: "some_id",
        name: "Organic Tomatoes",
        description: "Fresh, juicy organic tomatoes grown in Virgin Islands soil. Perfect for salads, cooking, and sauces. Hand-picked at peak ripeness for maximum flavor and nutrition.",
        price: 4.5,
        unit: "lb",
        quantity: 50,
        image: "https://images.unsplash.com/photo-1546470427-e42146a5e5d3?w=300&h=200&fit=crop",
        category: ProductCategory.vegetables,
        farm_id: "some_id",
        inSeason: true,
        organic: true,
        harvestDate: "2024-08-25",
      },
      {
        id: "4",
        name: "Fresh Basil",
        description: "Aromatic organic basil grown in greenhouse conditions. Perfect for Italian dishes, pesto, and garnishes. Picked daily for maximum freshness and flavor.",
        price: 8.0,
        unit: "bunch",
        quantity: 30,
        image: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=300&h=200&fit=crop",
        category: ProductCategory.herbs,
        farm_id: "some_id",
        inSeason: true,
        organic: true,
        harvestDate: "2024-08-27",
      },
      {
        id: "7",
        name: "Organic Lettuce",
        description: "Crisp, fresh lettuce grown without pesticides. Perfect for salads and sandwiches. Harvested daily to ensure peak freshness.",
        price: 3.25,
        unit: "head",
        quantity: 40,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop",
        category: ProductCategory.vegetables,
        farm_id: "some_id",
        inSeason: true,
        organic: true,
        harvestDate: "2024-08-28",
      }
    ]
  },
  {
    id: "2",
    name: "Tropical Paradise Gardens",
    description: "Specializing in tropical fruits and coconuts, we grow the sweetest and most flavorful fruits on the islands. Our coastal location provides the perfect climate for tropical cultivation.",
    location: "St. John",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=300&h=200&fit=crop",
    certified: true,
    specialties: ["Mangoes", "Papayas", "Coconuts"],
    contact: {
      phone: "(340) 555-0456",
      email: "contact@tropicalparadise.vi"
    },
    products: [
      {
        id: "2",
        name: "Fresh Mangoes",
        description: "Sweet, tropical mangoes bursting with flavor. Locally grown in the Virgin Islands with no pesticides. Perfect for eating fresh, smoothies, or desserts.",
        price: 3.25,
        unit: "lb",
        quantity: 75,
        image: "https://images.unsplash.com/photo-1605027990121-cbae9ea5b4c4?w=300&h=200&fit=crop",
        category: ProductCategory.fruits,
        farm_id: "some_id",
        inSeason: true,
        organic: false,
        harvestDate: "2024-08-26",
      },
      {
        id: "5",
        name: "Coconuts",
        description: "Fresh coconuts harvested daily from our coastal groves. Perfect for drinking coconut water or using in cooking. Rich in natural electrolytes and tropical flavor.",
        price: 2.5,
        unit: "each",
        quantity: 40,
        image: "https://images.unsplash.com/photo-1589994635164-b571d3245c7a?w=300&h=200&fit=crop",
        category: ProductCategory.fruits,
        farm_id: "some_id",
        inSeason: true,
        organic: true,
        harvestDate: "2024-08-28",
      },
      {
        id: "8",
        name: "Papayas",
        description: "Sweet, ripe papayas grown in our tropical gardens. Rich in vitamins and perfect for breakfast or desserts. Harvested when perfectly ripe.",
        price: 4.0,
        unit: "each",
        quantity: 25,
        image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=300&h=200&fit=crop",
        category: ProductCategory.fruits,
        farm_id: "some_id",
        inSeason: true,
        organic: false,
        harvestDate: "2024-08-29",
      }
    ]
  },
  {
    id: "3",
    name: "Island Fresh Produce",
    description: "A traditional Caribbean farm growing authentic island vegetables and spices. We focus on preserving traditional farming methods while delivering fresh, flavorful produce.",
    location: "St. Croix",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop",
    certified: false,
    specialties: ["Root Vegetables", "Plantains", "Caribbean Peppers"],
    contact: {
      phone: "(340) 555-0789",
      email: "orders@islandfresh.vi"
    },
    products: [
      {
        id: "3",
        name: "Caribbean Peppers",
        description: "Spicy Caribbean peppers with authentic island heat. Grown using traditional methods passed down through generations. Perfect for adding authentic Caribbean flavor to your dishes.",
        price: 6.0,
        unit: "lb",
        quantity: 25,
        image: "https://images.unsplash.com/photo-1583201111945-2b9fc8b1bb66?w=300&h=200&fit=crop",
        category: ProductCategory.vegetables,
        farm_id: "some_id",
        inSeason: true,
        organic: false,
        harvestDate: "2024-08-24",
      },
      {
        id: "6",
        name: "Sweet Plantains",
        description: "Ripe, sweet plantains perfect for frying or baking. A Caribbean staple that's versatile and delicious. Naturally sweet and packed with nutrients.",
        price: 3.75,
        unit: "lb",
        quantity: 60,
        image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=300&h=200&fit=crop",
        category: ProductCategory.fruits,
        farm_id: "some_id",
        inSeason: true,
        organic: false,
        harvestDate: "2024-08-25",
      },
      {
        id: "9",
        name: "Yuca Root",
        description: "Fresh yuca root, a traditional Caribbean staple. Perfect for boiling, frying, or making into flour. Rich in carbohydrates and naturally gluten-free.",
        price: 2.25,
        unit: "lb",
        quantity: 35,
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300&h=200&fit=crop",
        category: ProductCategory.vegetables,
        farm_id: "some_id",
        inSeason: true,
        organic: false,
        harvestDate: "2024-08-26",
      }
    ]
  }
];

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const location = searchParams.get('location');
    const certified = searchParams.get('certified');
    const specialty = searchParams.get('specialty');
    const farmId = searchParams.get('farmId');

    let filteredFarms = [...farmsData];

    // Filter by specific farm ID
    if (farmId) {
      const farm = filteredFarms.find(f => f.id === farmId);
      return NextResponse.json({
        success: true,
        data: farm || null,
        type: 'single'
      });
    }

    // Filter by location
    if (location && location !== 'all') {
      filteredFarms = filteredFarms.filter(farm => farm.location === location);
    }

    // Filter by certified status
    if (certified === 'true') {
      filteredFarms = filteredFarms.filter(farm => farm.certified === true);
    }

    // Filter by specialty
    if (specialty) {
      filteredFarms = filteredFarms.filter(farm => 
        farm.specialties.some(s => s.toLowerCase().includes(specialty.toLowerCase()))
      );
    }

    // Simulate API delay (remove in production)
    await new Promise(resolve => setTimeout(resolve, 100));

    return NextResponse.json({
      success: true,
      data: filteredFarms,
      total: filteredFarms.length,
      type: 'list'
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch farms data' },
      { status: 500 }
    );
  }
}

// Get all products from all farms (for marketplace)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { category, search, location } = body;

    let allProducts: (Product & { farmer: string; farmerLocation: string })[] = [];

    // Flatten all products from all farms
    farmsData.forEach(farm => {
      farm.products.forEach(product => {
        allProducts.push({
          ...product,
          farmer: farm.name,
          farmerLocation: farm.location
        });
      });
    });

    // Apply filters
    if (category && category !== 'all') {
      allProducts = allProducts.filter(product => product.category === category);
    }

    if (search) {
      const searchLower = search.toLowerCase();
      allProducts = allProducts.filter(product => 
        product.name.toLowerCase().includes(searchLower) ||
        product.farmer.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower)
      );
    }

    if (location && location !== 'all') {
      allProducts = allProducts.filter(product => product.farmerLocation === location);
    }

    await new Promise(resolve => setTimeout(resolve, 100));

    return NextResponse.json({
      success: true,
      data: allProducts,
      total: allProducts.length
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch products data' },
      { status: 500 }
    );
  }
}