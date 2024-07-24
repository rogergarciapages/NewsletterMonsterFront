import { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { supabase } from './supabaseClient'; // Use Supabase client

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
        token.id = user.id as string;
      }
      return token;
    },
  },
  events: {
    async createUser({ user }) {
      console.log('createUser event triggered with user:', user);
      try {
        const { data, error } = await supabase
          .from('users') // Ensure this table exists in your Supabase database
          .insert({
            user_id: user.id,
            email: user.email,
            name: user.name,
            profile_photo: user.image,
          });

        if (error) {
          console.error('Supabase insert error:', error);
          throw error;
        }

        console.log('User successfully inserted into Supabase:', data);
      } catch (err) {
        console.error('Failed to insert user into Supabase:', err);
      }
    },
  },
  debug: true,
};
