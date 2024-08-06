// C:\Users\Usuario\Documents\GitHub\nm3\src\pages\api\register.ts
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import { prisma } from '../../lib/prisma'; // Correct import
import { userSchema } from '../../schemas/userSchema';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const userData = userSchema.parse(req.body);

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // Check if email already exists
    const existingEmail = await prisma.user.findUnique({
      where: { email: userData.email },
    });

    if (existingEmail) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Check if username already exists
    const existingUsername = await prisma.user.findUnique({
      where: { username: userData.username },
    });

    if (existingUsername) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    const user = await prisma.user.create({
      data: {
        name: userData.name,
        surname: userData.surname,
        company_name: userData.company_name,
        username: userData.username,
        email: userData.email,
        password: hashedPassword,
        role: 'user',
      },
    });

    res.status(201).json({ user });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Unable to register user' });
  }
}
