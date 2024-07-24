import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { userId, newsletterId } = req.query;

    try {
      const existingLike = await prisma.like.findFirst({
        where: {
          user_id: String(userId),
          newsletter_id: Number(newsletterId),
        },
      });

      res.status(200).json({ liked: !!existingLike });
    } catch (error) {
      console.error('Error fetching like state:', error);
      res.status(500).json({ error: 'Unable to fetch like state' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
