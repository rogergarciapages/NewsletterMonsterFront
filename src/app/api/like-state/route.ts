import { NextRequest, NextResponse } from 'next/server';

// Define Like interface
interface Like {
  user_id: string;
  newsletter_id: number;
}

// Mock data source - replace this with your actual data source logic
let mockLikes: Like[] = [];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');
  const newsletterId = searchParams.get('newsletterId');

  if (!userId || !newsletterId) {
    return NextResponse.json({ error: 'User ID and Newsletter ID are required' }, { status: 400 });
  }

  try {
    // Check if the like exists in the mock data source
    const like = mockLikes.find(
      (like) => like.user_id === userId && like.newsletter_id === Number(newsletterId)
    );

    return NextResponse.json({ liked: !!like }, { status: 200 });
  } catch (error) {
    console.error('Error fetching like state:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
