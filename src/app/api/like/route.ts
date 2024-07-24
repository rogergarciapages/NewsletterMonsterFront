import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; // Ensure prisma is setup correctly

export async function POST(req: NextRequest) {
  const { userId, newsletterId } = await req.json();

  if (!userId || !newsletterId) {
    return NextResponse.json({ error: 'User ID and Newsletter ID are required' }, { status: 400 });
  }

  try {
    const existingLike = await prisma.like.findUnique({
      where: {
        user_id_newsletter_id: {
          user_id: userId,
          newsletter_id: newsletterId,
        },
      },
    });

    let liked;
    if (existingLike) {
      await prisma.like.delete({
        where: {
          user_id_newsletter_id: {
            user_id: userId,
            newsletter_id: newsletterId,
          },
        },
      });
      liked = false;
    } else {
      await prisma.like.create({
        data: {
          user_id: userId,
          newsletter_id: newsletterId,
        },
      });
      liked = true;
    }

    return NextResponse.json({ liked }, { status: 200 });
  } catch (error) {
    console.error('Error toggling like:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
