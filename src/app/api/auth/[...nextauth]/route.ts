// src/app/api/auth/[...nextauth]/route.ts

import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";
import LinkedInProvider from "next-auth/providers/linkedin";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      allowDangerousEmailAccountLinking: true,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID as string,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  debug: true, // Enable debugging
  callbacks: {
    async session({ session, token }) {
      console.log("Session callback:", { session, token });
      session.user = {
        ...session.user,
        id: token.id as string,
        name: token.name || "",
        email: token.email || "",
        image: token.image || "",
      };
      return session;
    },
    async jwt({ token, user, account }) {
      console.log("JWT callback:", { token, user, account });
      if (account) {
        token.id = user?.id;
        token.name = user?.name || "";
        token.email = user?.email || "";
        token.image = user?.image || "";
      }
      return token;
    },
    async signIn({ user, account, profile }) {
      console.log("SignIn callback:", { user, account, profile });
      try {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email ?? "" },
        });

        let userId = existingUser ? existingUser.user_id : undefined;

        if (existingUser) {
          await prisma.user.update({
            where: { email: user.email ?? "" },
            data: {
              name: user.name ?? "",
              profile_photo: user.image ?? "",
            },
          });
        } else {
          const username = user.email?.split("@")[0] ?? "default_username";
          const newUser = await prisma.user.create({
            data: {
              email: user.email ?? "",
              name: user.name ?? "",
              profile_photo: user.image ?? "",
              surname: user.name?.split(" ").slice(1).join(" ") ?? "Default Surname",
              company_name: "Default Company",
              username: username,
              password: username,
            },
          });
          userId = newUser.user_id;
        }

        // At this point, userId should be set
        if (account && userId) {
          await prisma.account.create({
            data: {
              provider: account.provider,
              type: account.type,
              providerAccountId: account.providerAccountId,
              access_token: account.access_token,
              refresh_token: account.refresh_token,
              expires_at: account.expires_at,
              token_type: account.token_type,
              id_token: account.id_token,
              userId: userId, // Assign the userId here
            },
          });
        }

        return true;
      } catch (error) {
        console.error("Error during user signIn:", error);
        return false;
      }
    },
    async redirect({ url, baseUrl }) {
      console.log("Redirect callback:", { url, baseUrl });
      return baseUrl;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
