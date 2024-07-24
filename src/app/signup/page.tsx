"use client";  // <- Add this line at the top

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignUp = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name }),
    });

    if (res.ok) {
      router.push('/login');
    } else {
      try {
        const data = await res.json();
        setError(data.error || 'Failed to sign up');
      } catch (err) {
        setError('Unexpected error occurred');
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Sign Up</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 mb-4 border rounded-md"
          required
        />
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
          Sign Up
        </button>
      </form>
      <p className="mt-4">
        Already have an account? <a href="/login" className="text-blue-600">Sign In</a>
      </p>
    </div>
  );
};

export default SignUp;
