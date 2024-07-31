import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

// Define User and Post interfaces
interface User {
  id: number;
  name: string;
  email: string;
}

interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  user: User;
}

// Mock data source - replace this with your actual data source logic
let mockPosts: Post[] = [
  {
    id: 1,
    title: "Sample Post",
    content: "This is a sample post.",
    createdAt: new Date().toISOString(),
    user: { id: 1, name: "John Doe", email: "johndoe@example.com" },
  },
  // Add more mock posts as needed
];

const getPosts = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Simulate fetching posts from the mock data source
    const posts = mockPosts;
    
    res.status(200).json(posts);
  } catch (error) {
    const err = error as Error;
    return res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
};

export default getPosts;
