import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { CreateProductData } from '@/lib/types'

export async function GET(
  req: NextRequest,
  { params }: { params: { farmId: string } }
) {
  try {
    const products = await prisma.product.findMany({
      where: { farm_id: params.farmId },
      include: {
        farm: {
          select: { id: true, name: true }
        }
      },
      orderBy: { created_at: 'desc' }
    })

    return NextResponse.json({ products })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: { farmId: string } }
) {
  const session = await getServerSession(authOptions)
  
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    // Verify farm ownership
    const farm = await prisma.farm.findFirst({
      where: {
        id: params.farmId,
        owner_id: session.user.id
      }
    })

    if (!farm) {
      return NextResponse.json({ error: 'Farm not found or unauthorized' }, { status: 404 })
    }

    const body: Omit<CreateProductData, 'farm_id'> = await req.json()
    
    const product = await prisma.product.create({
      data: {
        ...body,
        farm_id: params.farmId,
        images: body.images ? JSON.stringify(body.images) : null,
        harvest_date: body.harvest_date ? new Date(body.harvest_date) : null
      },
      include: {
        farm: {
          select: { id: true, name: true }
        }
      }
    })

    return NextResponse.json({ product }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 })
  }
}
