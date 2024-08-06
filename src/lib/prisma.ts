import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

// Extend Prisma client with Accelerate using the $extends method
const prismaClient = new PrismaClient().$extends(withAccelerate());

const globalForPrisma = global as unknown as { prisma: PrismaClient };

if (!globalForPrisma.prisma) {
    // Cast extended Prisma client to standard PrismaClient type for compatibility
    globalForPrisma.prisma = prismaClient as unknown as PrismaClient;
}

export const prisma = globalForPrisma.prisma;
