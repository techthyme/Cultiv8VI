// prisma/smoke.ts
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // 1) Make sure a Category exists (idempotent)
  const category = await prisma.category.upsert({
    where: { id: 'smoke' },
    create: { id: 'smoke', name: 'Smoke', icon: '🔥' },
    update: { icon: '🔥' },
  })

  // 2) Create or reuse a Farmer (idempotent by unique name)
  const farmer = await prisma.farmer.upsert({
    where: { name: 'SMOKE Farm' },
    update: { location: 'St. Thomas', rating: 4.2 },
    create: { name: 'SMOKE Farm', location: 'St. Thomas', rating: 4.2 },
  })

  // 3) Clean previous test product (so script is safe to rerun)
  await prisma.product.deleteMany({ where: { name: 'SMOKE - Basil', farmerId: farmer.id } })

  // 4) Create a Product (this is the actual "save" test)
  const created = await prisma.product.create({
    data: {
      name: 'SMOKE - Basil',
      farmerId: farmer.id,
      location: 'St. Thomas',
      price: '9.50',     // Decimal → pass as string
      unit: 'bunch',
      quantity: '10',    // Decimal → pass as string
      categoryId: category.id,
      inSeason: true,
      organic: true,
    },
  })

  // 5) Read it back (with relations)
  const readBack = await prisma.product.findUnique({
    where: { id: created.id },
    include: { farmer: true, category: true },
  })

  console.log('✅ Wrote & read product:', {
    id: readBack?.id,
    name: readBack?.name,
    farmer: readBack?.farmer.name,
    category: readBack?.categoryId,
    price: readBack?.price.toString(),
    quantity: readBack?.quantity.toString(),
  })

  // 6) Update it (prove writes again)
  await prisma.product.update({
    where: { id: created.id },
    data: { quantity: '9' },
  })
  const updated = await prisma.product.findUnique({ where: { id: created.id } })
  console.log('🔁 Updated quantity to:', updated?.quantity.toString())

  // 7) (Optional) Cleanup — uncomment if you want to leave DB clean
  // await prisma.product.delete({ where: { id: created.id } })
  // console.log('🧹 Deleted test product')
}

main()
  .then(() => console.log('🎉 Smoke test completed'))
  .catch((e) => { console.error('❌ Smoke test failed:', e); process.exit(1) })
  .finally(async () => { await prisma.$disconnect() })
