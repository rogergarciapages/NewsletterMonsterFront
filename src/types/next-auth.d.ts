// src/types/next-auth.d.ts
import { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      image?: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string;
    image?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    image?: string;
  }
}
