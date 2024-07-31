import { NextRequest, NextResponse } from 'next/server';

// Define Like interface
interface Like {
  user_id: string;
  newsletter_id: string;
}

// Mock data source - replace this with your actual data source logic
let mockLikes: Like[] = [];

export async function POST(req: NextRequest) {
  const { userId, newsletterId } = await req.json();

  if (!userId || !newsletterId) {
    return NextResponse.json({ error: 'User ID and Newsletter ID are required' }, { status: 400 });
  }

  try {
    // Check if the like already exists in the mock data source
    const existingLikeIndex = mockLikes.findIndex(
      (like) => like.user_id === userId && like.newsletter_id === newsletterId
    );

    let liked;
    if (existingLikeIndex !== -1) {
      // Like exists, remove it
      mockLikes.splice(existingLikeIndex, 1);
      liked = false;
    } else {
      // Like doesn't exist, create it
      mockLikes.push({ user_id: userId, newsletter_id: newsletterId });
      liked = true;
    }

    return NextResponse.json({ liked }, { status: 200 });
  } catch (error) {
    console.error('Error toggling like:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
