import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  const { userId, newsletterId } = await req.json();

  console.log(`Received like request from userId: ${userId}, newsletterId: ${newsletterId}`);

  try {
    const user = await prisma.user.findUnique({
      where: { user_id: userId },
    });

    console.log('User query result:', user);

    if (!user) {
      console.error('User not found');
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const existingLike = await prisma.like.findUnique({
      where: {
        user_id_newsletter_id: {
          user_id: userId,
          newsletter_id: newsletterId,
        },
      },
    });

    console.log('Existing like query result:', existingLike);

    if (existingLike) {
      await prisma.like.delete({
        where: {
          like_id: existingLike.like_id,
        },
      });
      console.log('Like removed');
      return NextResponse.json({ liked: false }, { status: 200 });
    } else {
      const like = await prisma.like.create({
        data: {
          user_id: userId,
          newsletter_id: newsletterId,
        },
      });
      console.log('Like added');
      return NextResponse.json({ liked: true }, { status: 200 });
    }
  } catch (error) {
    console.error('Error recording like:', error);
    return NextResponse.json({ error: 'Unable to record like' }, { status: 500 });
  }
}
