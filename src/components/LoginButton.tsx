// C:\Users\Usuario\Documents\GitHub\nm3\src\components\LoginButton.tsx
'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";

const LoginButton: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogin = () => {
    router.push('/auth'); // Redirect to unified login page
  };

  return (
    <>
      {session ? (
        <div>Logged in as {session.user?.email}</div>
      ) : (
        <Button onClick={handleLogin} className="text-xs pt-1 pb-1 m-0 h-6 font-medium hover:bg-[#ccc]">
          Login
        </Button>
      )}
    </>
  );
};

export default LoginButton;
