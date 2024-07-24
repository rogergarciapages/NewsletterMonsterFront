"use client"

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

const SignIn = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn('credentials', {
      redirect: false,
      email: email, // Ensure email is correctly passed
      password: password, // Ensure password is correctly passed
      callbackUrl: `${window.location.origin}/dashboard`, // You can adjust this
    });

    if (result?.error) {
      setError(result.error);
    } else {
      router.push(result?.url || '/dashboard');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Sign In</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
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
      <p className="mt-4">
        Don't have an account? <a href="/auth/signup" className="text-blue-600">Sign Up</a>
      </p>
    </div>
  );
};

export default SignIn;
