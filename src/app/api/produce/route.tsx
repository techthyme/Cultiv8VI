import { NextResponse } from "next/server";
import { mockProducts } from "@/data";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return NextResponse.json({ produce: mockProducts });
}
