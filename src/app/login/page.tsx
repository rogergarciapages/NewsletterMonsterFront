// src/app/login/page.tsx
"use client";

import { getProviders, ClientSafeProvider, LiteralUnion } from 'next-auth/react';
import { BuiltInProviderType } from 'next-auth/providers';
import { useEffect, useState } from 'react';
import { NavBar } from '@/components/Navbar';
import AuthButtons from '@/components/home/auth-screen/AuthButtons';

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
    <div className="min-h-screen flex flex-col">
      <NavBar /> {/* Keep the Navbar at the top */}
      <div className="flex flex-1 items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl mb-6">Sign In</h1>
          <AuthButtons providers={providers} /> {/* Pass providers prop */}
        </div>
      </div>
    </div>
  );
};

export default Login;
