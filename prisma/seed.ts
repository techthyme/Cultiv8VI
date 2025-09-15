// prisma/seed.ts
import { randomUUID } from 'crypto'
import { PrismaClient, AvailabilityLevel, SupportType } from '@prisma/client'


const prisma = new PrismaClient()

async function main() {
  // Categories
  await prisma.category.createMany({
    data: [
      { id: 'vegetables', name: 'Vegetables', icon: '🥬' },
      { id: 'fruits',     name: 'Fruits',     icon: '🥭' },
      { id: 'herbs',      name: 'Herbs',      icon: '🌿' },
      { id: 'roots',      name: 'Root Vegetables', icon: '🥕' },
    ],
  })

  // Farmers
  const greenValley = await prisma.farmer.upsert({
    where: { name: 'Green Valley Farm' },
    update: {},
    create: {
      name: 'Green Valley Farm',
      location: 'St. Thomas',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=300&h=200&fit=crop',
      certified: true,
      specialties: ['Organic Vegetables','Herbs','Tropical Fruits'],
    },
  })
  const tropicalParadise = await prisma.farmer.upsert({
    where: { name: 'Tropical Paradise Gardens' },
    update: {},
    create: {
      name: 'Tropical Paradise Gardens',
      location: 'St. John',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=300&h=200&fit=crop',
      certified: true,
      specialties: ['Mangoes','Papayas','Coconuts'],
    },
  })
  const islandFresh = await prisma.farmer.upsert({
    where: { name: 'Island Fresh Produce' },
    update: {},
    create: {
      name: 'Island Fresh Produce',
      location: 'St. Croix',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop',
      certified: false,
      specialties: ['Root Vegetables','Plantains','Peppers'],
    },
  })

  // Products
  await prisma.product.createMany({
    data: [
      {
        id: randomUUID(),
        name: 'Organic Tomatoes',
        farmerId: greenValley.id,
        location: 'St. Thomas',
        price: 4.50,
        unit: 'lb',
        quantity: 50,
        imageUrl: 'https://images.unsplash.com/photo-1546470427-e42146a5e5d3?w=300&h=200&fit=crop',
        categoryId: 'vegetables',
        inSeason: true,
        organic: true,
        harvestDate: new Date('2024-08-25'),
      },
      {
        id: randomUUID(),
        name: 'Fresh Mangoes',
        farmerId: tropicalParadise.id,
        location: 'St. John',
        price: 3.25,
        unit: 'lb',
        quantity: 75,
        imageUrl: 'https://images.unsplash.com/photo-1605027990121-cbae9ea5b4c4?w=300&h=200&fit=crop',
        categoryId: 'fruits',
        inSeason: true,
        organic: false,
        harvestDate: new Date('2024-08-26'),
      },
      {
        id: randomUUID(),
        name: 'Caribbean Peppers',
        farmerId: islandFresh.id,
        location: 'St. Croix',
        price: 6.00,
        unit: 'lb',
        quantity: 25,
        imageUrl: 'https://images.unsplash.com/photo-1583201111945-2b9fc8b1bb66?w=300&h=200&fit=crop',
        categoryId: 'vegetables',
        inSeason: true,
        organic: false,
        harvestDate: new Date('2024-08-24'),
      },
      {
        id: randomUUID(),
        name: 'Fresh Basil',
        farmerId: greenValley.id,
        location: 'St. Thomas',
        price: 8.00,
        unit: 'bunch',
        quantity: 30,
        imageUrl: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=300&h=200&fit=crop',
        categoryId: 'herbs',
        inSeason: true,
        organic: true,
        harvestDate: new Date('2024-08-27'),
      },
    ],
  })

  /* Help Center */
  await prisma.faqCategory.createMany({
    data: [
      { id: 'getting-started', name: 'Getting Started' },
      { id: 'pricing',         name: 'Pricing & Payments' },
      { id: 'orders',          name: 'Orders & Fulfillment' },
      { id: 'quality',         name: 'Quality Standards' },
      { id: 'seasonal',        name: 'Seasonal Planning' },
      { id: 'certifications',  name: 'Certifications' },
      { id: 'logistics',       name: 'Delivery & Logistics' },
    ],
  })

  const faqs = [
    { question: 'How do I create my farmer profile on Cultiv8VI?', categoryId: 'getting-started',
      answer: "Click 'Join as Farmer' and complete the registration form. Verify your location and add photos." },
    { question: 'What commission does Cultiv8VI charge?', categoryId: 'pricing',
      answer: '10% on completed transactions; no upfront listing fees.' },
    { question: 'How do I list my products?', categoryId: 'getting-started',
      answer: "In Farmer Dashboard → 'Add Product'. Include photos, description, price, and availability." },
  ]
  for (const f of faqs) await prisma.faq.create({ data: f })

  await prisma.articleCategory.createMany({
    data: [
      { id: 'weather',  name: 'Weather & Climate',  icon: '☀️' },
      { id: 'quality',  name: 'Quality & Handling', icon: '⭐' },
      { id: 'crops',    name: 'Crop Management',    icon: '🌱' },
      { id: 'business', name: 'Business Tips',      icon: '💼' },
      { id: 'soil',     name: 'Soil & Fertility',   icon: '🌍' },
    ],
  })

  await prisma.article.createMany({
    data: [
      { title: 'Maximizing Your Hurricane Season Harvest', slug: 'maximizing-hurricane-season-harvest',
        summary: 'Strategies for VI hurricane season (June–Nov).', content: 'Longform content...',
        categoryId: 'weather', publishedAt: new Date('2024-08-20'), readMinutes: 5, isPublished: true },
      { title: 'Post-Harvest Handling for Restaurant Quality', slug: 'post-harvest-handling',
        summary: 'Cooling, storage, and packaging best practices.', content: 'Longform content...',
        categoryId: 'quality', publishedAt: new Date('2024-08-15'), readMinutes: 7, isPublished: true },
    ],
  })

  await prisma.seasonalItem.createMany({
    data: [
      { crop: 'Tomatoes',       peakSeason: 'Dec - Apr', availability: AvailabilityLevel.HIGH, notes: 'Tough in wet season' },
      { crop: 'Mangoes',        peakSeason: 'Jun - Aug', availability: AvailabilityLevel.MEDIUM },
      { crop: 'Peppers',        peakSeason: 'Year-round', availability: AvailabilityLevel.HIGH },
      { crop: 'Basil',          peakSeason: 'Year-round', availability: AvailabilityLevel.HIGH },
    ],
  })

  await prisma.supportChannel.createMany({
    data: [
      { type: SupportType.PHONE,     label: 'Phone Support', description: 'Mon–Fri, 8–6', value: '(340) 555-FARM', order: 1 },
      { type: SupportType.EMAIL,     label: 'Email Support', description: '24h response', value: 'farmers@cultiv8vi.com', order: 2 },
      { type: SupportType.LIVE_CHAT, label: 'Live Chat',     description: 'Business hours', link: '/dashboard/chat', order: 3 },
      { type: SupportType.COMMUNITY, label: 'Farmer Community', description: 'Join WhatsApp group', order: 4 },
    ],
  })

  await prisma.emergencyContact.createMany({
    data: [
      { organization: 'VI Cooperative Extension', phone: '(340) 692-4015', order: 1 },
      { organization: 'Department of Agriculture', phone: '(340) 778-0997', order: 2 },
    ],
  })
}

main().finally(() => prisma.$disconnect())
