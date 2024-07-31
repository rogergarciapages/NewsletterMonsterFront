import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import bcrypt from 'bcryptjs';

// Mock user data or use another database solution
// Example mock user data
const mockUser = {
  user_id: '1',
  name: 'John Doe',
  email: 'johndoe@example.com',
  password: bcrypt.hashSync('password123', 10), // Ensure the password is hashed similarly to your stored passwords
  profile_photo: 'https://example.com/photo.jpg',
};

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials || !credentials.email || !credentials.password) {
          throw new Error('Email and password are required');
        }

        // Find user from your data source
        const user = mockUser; // Replace this with your user fetching logic

        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          return { id: user.user_id, name: user.name, email: user.email, image: user.profile_photo ?? "" };
        }

        return null;
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async session({ session, token }: { session: any; token: any }) {
      if (token.id) {
        session.user = {
          ...session.user,
          id: token.id as string,
          image: token.image as string,
        };
      }
      return session;
    },
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        token.id = user.id;
        token.image = user.image;
      }
      return token;
    },
  },
  pages: {
    signIn: '/login',  // Redirect to unified login page
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
