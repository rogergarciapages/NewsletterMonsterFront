// C:\Users\Usuario\Documents\GitHub\nm3\src\app\auth\page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import RegisterForm from '../../components/home/auth-screen/RegisterForm';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const AuthPage: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isRegister, setIsRegister] = useState(false);

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/dashboard');
    }
  }, [status, router]);

  const handleLoginSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const email = (event.target as any).email.value;
    const password = (event.target as any).password.value;

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      console.error(result.error);
    } else {
      router.push('/dashboard');
    }
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        {isRegister ? (
          <>
            <h1>Sign Up</h1>
            <RegisterForm />
            <p className="mt-4">
              Already have an account?{' '}
              <a onClick={() => setIsRegister(false)} className="text-blue-600 cursor-pointer">
                Sign In
              </a>
            </p>
          </>
        ) : (
          <>
            <h1>Login</h1>
            <div className="w-full max-w-sm">
              <button onClick={() => signIn('github')} className="w-full mb-4 px-4 py-2 bg-gray-800 text-white rounded-md">
                Sign In with GitHub
              </button>
              <button onClick={() => signIn('google')} className="w-full mb-4 px-4 py-2 bg-red-500 text-white rounded-md">
                Sign In with Google
              </button>
              <form onSubmit={handleLoginSubmit}>
                <input type="email" name="email" placeholder="Email" className="w-full px-3 py-2 mb-4 border rounded-md" required />
                <input type="password" name="password" placeholder="Password" className="w-full px-3 py-2 mb-4 border rounded-md" required />
                <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded-md">Sign In</button>
              </form>
            </div>
            <p className="mt-4">
              Don't have an account?{' '}
              <a onClick={() => setIsRegister(true)} className="text-blue-600 cursor-pointer">
                Sign Up
              </a>
            </p>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default AuthPage;
