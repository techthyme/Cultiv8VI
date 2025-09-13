import { NextResponse } from 'next/server';
import { Produce } from '../../types';

// Sample produce data - this would typically come from a database
const produceData: Produce[] = [
  {
    id: 1,
    name: "Organic Tomatoes",
    description: "Fresh, juicy organic tomatoes grown in Virgin Islands soil. Perfect for salads, cooking, and sauces. Hand-picked at peak ripeness.",
    farmer: "Green Valley Farm",
    farmerLocation: "St. Thomas",
    price: 4.5,
    unit: "lb",
    quantity: 50,
    image: "https://images.unsplash.com/photo-1546470427-e42146a5e5d3?w=300&h=200&fit=crop",
    category: "vegetables",
    inSeason: true,
    organic: true,
    harvestDate: "2024-08-25",
  },
  {
    id: 2,
    name: "Fresh Mangoes",
    description: "Sweet, tropical mangoes bursting with flavor. Locally grown in the Virgin Islands with no pesticides. Ready to eat or perfect for smoothies.",
    farmer: "Tropical Paradise Gardens",
    farmerLocation: "St. John",
    price: 3.25,
    unit: "lb",
    quantity: 75,
    image: "https://images.unsplash.com/photo-1605027990121-cbae9ea5b4c4?w=300&h=200&fit=crop",
    category: "fruits",
    inSeason: true,
    organic: false,
    harvestDate: "2024-08-26",
  },
  {
    id: 3,
    name: "Caribbean Peppers",
    description: "Spicy Caribbean peppers with authentic island heat. Grown using traditional methods. Perfect for adding kick to your dishes.",
    farmer: "Island Fresh Produce",
    farmerLocation: "St. Croix",
    price: 6.0,
    unit: "lb",
    quantity: 25,
    image: "https://images.unsplash.com/photo-1583201111945-2b9fc8b1bb66?w=300&h=200&fit=crop",
    category: "vegetables",
    inSeason: true,
    organic: false,
    harvestDate: "2024-08-24",
  },
  {
    id: 4,
    name: "Fresh Basil",
    description: "Aromatic organic basil grown in greenhouse conditions. Perfect for Italian dishes, pesto, and garnishes. Picked daily for maximum freshness.",
    farmer: "Green Valley Farm",
    farmerLocation: "St. Thomas",
    price: 8.0,
    unit: "bunch",
    quantity: 30,
    image: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=300&h=200&fit=crop",
    category: "herbs",
    inSeason: true,
    organic: true,
    harvestDate: "2024-08-27",
  },
  {
    id: 5,
    name: "Coconuts",
    description: "Fresh coconuts harvested daily from our coastal groves. Perfect for drinking or cooking. Rich in natural electrolytes and flavor.",
    farmer: "Tropical Paradise Gardens",
    farmerLocation: "St. John",
    price: 2.5,
    unit: "each",
    quantity: 40,
    image: "https://images.unsplash.com/photo-1589994635164-b571d3245c7a?w=300&h=200&fit=crop",
    category: "fruits",
    inSeason: true,
    organic: true,
    harvestDate: "2024-08-28",
  },
  {
    id: 6,
    name: "Sweet Plantains",
    description: "Ripe, sweet plantains perfect for frying or baking. A Caribbean staple that's versatile and delicious. Naturally sweet and nutritious.",
    farmer: "Island Fresh Produce",
    farmerLocation: "St. Croix",
    price: 3.75,
    unit: "lb",
    quantity: 60,
    image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=300&h=200&fit=crop",
    category: "fruits",
    inSeason: true,
    organic: false,
    harvestDate: "2024-08-25",
  },
];

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const location = searchParams.get('location');

    let filteredProduce = [...produceData];

    // Filter by category
    if (category && category !== 'all') {
      filteredProduce = filteredProduce.filter(item => item.category === category);
    }

    // Filter by search term
    if (search) {
      const searchLower = search.toLowerCase();
      filteredProduce = filteredProduce.filter(item => 
        item.name.toLowerCase().includes(searchLower) ||
        item.farmer.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower)
      );
    }

    // Filter by location
    if (location && location !== 'all') {
      filteredProduce = filteredProduce.filter(item => item.farmerLocation === location);
    }

    // Simulate API delay (remove in production)
    await new Promise(resolve => setTimeout(resolve, 100));

    return NextResponse.json({
      success: true,
      data: filteredProduce,
      total: filteredProduce.length
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch produce data' },
      { status: 500 }
    );
  }
}

// GET individual produce item
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id } = body;

    const produce = produceData.find(item => item.id === id);
    
    if (!produce) {
      return NextResponse.json(
        { success: false, error: 'Produce not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: produce
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch produce item' },
      { status: 500 }
    );
  }
}