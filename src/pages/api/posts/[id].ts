import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

// Define User and Post interfaces
interface User {
  id: number;
  name: string;
  email: string;
}

interface Post {
  newsletter_id: number;
  title: string;
  content: string;
  user: User;
}

// Mock data source - replace this with your actual data source logic
let mockPosts: Post[] = [
  {
    newsletter_id: 1,
    title: "Sample Post",
    content: "This is a sample post.",
    user: { id: 1, name: "John Doe", email: "johndoe@example.com" },
  },
  // Add more mock posts as needed
];

const getPost = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { id } = req.query as { id: string };

  try {
    // Find the post in the mock data source
    const post = mockPosts.find((post) => post.newsletter_id === parseInt(id));

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.status(200).json(post);
  } catch (error) {
    const err = error as Error;
    return res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
};

export default getPost;
