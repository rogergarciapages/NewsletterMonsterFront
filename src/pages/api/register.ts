// C:\Users\Usuario\Documents\GitHub\nm3\src\pages\api\register.ts
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import prisma from '../../lib/prisma';
import { userSchema } from '../../schemas/userSchema';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const userData = userSchema.parse(req.body);

      const hashedPassword = await bcrypt.hash(userData.password, 10);

      const existingUser = await prisma.user.findUnique({
        where: { email: userData.email },
      });

      if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
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
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
