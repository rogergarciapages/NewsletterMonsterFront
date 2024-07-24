"use client"

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn('credentials', {
      redirect: false,
      email: email,
      password: password,
      callbackUrl: `${window.location.origin}/dashboard`,
    });

    if (result?.error) {
      setError(result.error);
    } else {
      router.push(result?.url || '/dashboard');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Login</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="w-full max-w-sm">
        <button
          onClick={() => signIn('github')}
          className="w-full mb-4 px-4 py-2 bg-gray-800 text-white rounded-md"
        >
          Sign In with GitHub
        </button>
        <button
          onClick={() => signIn('google')}
          className="w-full mb-4 px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Sign In with Google
        </button>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 mb-4 border rounded-md"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 mb-4 border rounded-md"
            required
          />
          <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded-md">
            Sign In
          </button>
        </form>
      </div>
      <p className="mt-4">
        Don't have an account? <a href="/signup" className="text-blue-600">Sign Up</a>
      </p>
    </div>
  );
};

export default Login;
