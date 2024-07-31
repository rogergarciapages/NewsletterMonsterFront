import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';

// Define User interface
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Mock data source - replace this with your actual data source logic
let mockUsers: User[] = [];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      // Check if user already exists in the mock data source
      const existingUser = mockUsers.find(user => user.email === email);

      if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
      }

      // Create a new user
      const user: User = {
        id: mockUsers.length + 1,
        name,
        email,
        password: hashedPassword,
      };
      mockUsers.push(user);

      res.status(201).json({ user });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Unable to register user' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
