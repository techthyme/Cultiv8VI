import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { CreateFarmData } from '@/types'

export async function GET() {
  const session = await getServerSession(authOptions)
  
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const farms = await prisma.farm.findMany({
      where: { owner_id: session.user.id },
      include: {
        location: true,
        _count: {
          select: { products: true }
        }
      },
      orderBy: { created_at: 'desc' }
    })

    return NextResponse.json({ farms })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch farms' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body: CreateFarmData = await req.json()
    
    const farm = await prisma.farm.create({
      data: {
        name: body.name,
        description: body.description,
        owner_id: session.user.id,
        location: body.location ? {
          create: body.location
        } : undefined
      },
      include: {
        location: true
      }
    })

    return NextResponse.json({ farm }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create farm' }, { status: 500 })
  }
}
