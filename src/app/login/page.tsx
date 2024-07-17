// src/app/login/page.tsx
"use client";

import { getProviders, signIn, ClientSafeProvider, LiteralUnion } from 'next-auth/react';
import { BuiltInProviderType } from 'next-auth/providers';
import { useEffect, useState } from 'react';
import { NavBar } from '@/components/Navbar';

const Login = () => {
  const [providers, setProviders] = useState<Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null>(null);

  useEffect(() => {
    const setAuthProviders = async () => {
      const authProviders = await getProviders();
      setProviders(authProviders);
    };
    setAuthProviders();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
        <NavBar />
      <h1 className="text-2xl mb-6">Sign In</h1>
      {providers && Object.values(providers).map((provider) => (
        <div key={provider.name} className="mb-4">
          <button onClick={() => signIn(provider.id)} className="btn btn-primary">
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Login;
