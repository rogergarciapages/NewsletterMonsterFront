// src/components/AuthButtons.tsx

"use client";
import { Button } from '@/components/ui/button';
import { signIn, signOut } from 'next-auth/react';
import { useState } from 'react';

const AuthButtons = () => {
  const [loading, setLoading] = useState(false);

  const handleSignUp = () => {
    setLoading(true);
    signIn('github'); // Use 'github' or 'google' as the provider
  };

  const handleLogin = () => {
    setLoading(true);
    signIn('github'); // Use 'github' or 'google' as the provider
  };

  const handleLogout = () => {
    setLoading(true);
    signOut();
  };

  return (
    <div className='flex gap-3 flex-1 md:flex-row flex-col'>
      <Button
        className='w-full bg-primary'
        variant={"outline"}
        disabled={loading}
        onClick={handleSignUp}
      >
        Sign Up
      </Button>
      <Button
        className='w-full bg-secondary'
        variant={"outline"}
        disabled={loading}
        onClick={handleLogin}
      >
        Log in
      </Button>
      <Button
        className='w-full bg-red-500'
        variant={"outline"}
        disabled={loading}
        onClick={handleLogout}
      >
        Log out
      </Button>
    </div>
  );
};

export default AuthButtons;
