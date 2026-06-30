import { PrismaClient } from '../generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

// Initialize the Prisma PostgreSQL driver adapter
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL
})

// Pass the adapter instance to the client
export const prisma = new PrismaClient({ adapter })
