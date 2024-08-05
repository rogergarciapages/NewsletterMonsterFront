// C:\Users\Usuario\Documents\GitHub\nm3\src\app\api\auth\[...nextauth]\route.ts
"use client"

import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import prisma from '../../../../lib/prisma';
import bcrypt from 'bcryptjs';
import { NextApiRequest, NextApiResponse } from 'next';

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          return {
            id: user.user_id,
            name: user.name || user.username || "",
            email: user.email,
            image: user.profile_photo || "",
          };
        }

        return null;
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  pages: {
    signIn: '/auth',
  },
  callbacks: {
    async session({ session, token }) {
      session.user = {
        ...session.user,
        id: token.id,
        name: token.name || "",
        email: token.email || "",
        image: token.picture || "",
      };
      return session;
    },
  },
};

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    return NextAuth(req, res, authOptions);
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    return NextAuth(req, res, authOptions);
}
