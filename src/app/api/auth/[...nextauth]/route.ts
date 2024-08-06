// C:\Users\Usuario\Documents\GitHub\nm3\src\app\api\auth\[...nextauth]\route.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";

const GITHUB_ID = process.env.GITHUB_ID as string;
const GITHUB_SECRET = process.env.GITHUB_SECRET as string;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET as string;

if (!GITHUB_ID || !GITHUB_SECRET || !GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
  throw new Error("Missing OAuth environment variables");
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
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
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: PrismaAdapter(prisma), // Ensure PrismaAdapter is correctly initialized
  pages: {
    signIn: "/auth",
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
    async jwt({ token, user, account }) {
      if (account) {
        token.id = user?.id;
        token.name = user?.name;
        token.email = user?.email;
        token.picture = user?.image;
      }
      return token;
    },
    async signIn({ user, account, profile }) {
      try {
        const userInDb = await prisma.user.upsert({
          where: { email: user.email ?? '' },
          update: {
            name: user.name ?? '',
            profile_photo: user.image ?? '',
          },
          create: {
            email: user.email ?? '',
            name: user.name ?? '',
            profile_photo: user.image ?? '',
            surname: '',
            company_name: '',
            username: '',
            password: '',
          },
        });
        return true;
      } catch (error) {
        console.error('Error during user upsert:', error);
        return false;
      }
    },
    async redirect({ url, baseUrl }) {
      if (url.includes('/auth')) {
        return `${baseUrl}/dashboard`;
      }
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
