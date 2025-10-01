import { NextResponse } from 'next/server';
import { mockFarms } from '@/data';

export async function GET() {
  // Simulate some processing time
  await new Promise(resolve => setTimeout(resolve, 500));

  return NextResponse.json({ farms: mockFarms });
}