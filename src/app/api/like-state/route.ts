import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; // Ensure prisma is setup correctly

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');
  const newsletterId = searchParams.get('newsletterId');

  if (!userId || !newsletterId) {
    return NextResponse.json({ error: 'User ID and Newsletter ID are required' }, { status: 400 });
  }

  try {
    const like = await prisma.like.findUnique({
      where: {
        user_id_newsletter_id: {
          user_id: userId,
          newsletter_id: Number(newsletterId),
        },
      },
    });

    return NextResponse.json({ liked: !!like }, { status: 200 });
  } catch (error) {
    console.error('Error fetching like state:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
