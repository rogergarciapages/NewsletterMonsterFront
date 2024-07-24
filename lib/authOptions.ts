import { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
    newUser: '/auth/new-user',
  },
  callbacks: {
    async session({ session, token }) {
      console.log('Session callback:', { session, token });
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      console.log('JWT callback:', { token, user });
      if (user) {
        token.id = user.id; // Ensure user.id matches with your schema
      }
      return token;
    },
  },
  events: {
    async createUser({ user }) {
      console.log('New user created event triggered:', user);
      try {
        const newUser = await prisma.user.create({
          data: {
            user_id: user.id as string, // Ensure this matches your schema
            email: user.email ?? 'default@example.com', // Provide a default value if email is undefined
            name: user.name ?? 'Default Name', // Provide a default value if name is undefined
            profile_photo: user.image ?? null, // Use null if image is undefined
          },
        });
        console.log('User successfully inserted into Prisma:', newUser);
      } catch (err) {
        console.error('Failed to insert user into Prisma:', err);
      }
    },
  },
  debug: true, // Enable debug mode for more detailed logs
};
