// pages/api/test-query.ts

import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = await prisma.user.findMany({
      where: {
        email: {
          contains: "alice@prisma.io",
        },
      },
      cacheStrategy: { ttl: 60 }, // Cache for 60 seconds
    });

    res.status(200).json(users);
  } catch (err) {
    const error = err as Error; // Type assertion
    console.error('Error executing query:', error);
    res.status(500).json({ error: `Error executing query: ${error.message}` });
  }
}
