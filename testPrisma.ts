// testPrisma.ts
import { prisma } from './src/lib/prisma';

async function testPrisma() {
    try {
        const users = await prisma.user.findMany();
        console.log('Prisma Client initialized successfully:', users);
    } catch (error) {
        console.error('Error initializing Prisma Client:', error);
    }
}

testPrisma();
