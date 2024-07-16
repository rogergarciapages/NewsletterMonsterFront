// src/components/Navbar.tsx

import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="text-white text-xl font-bold">
          <Link href="/">MyLogo</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-white">Home</Link>
          <Link href="/categories" className="text-white">Categories</Link>
          <Link href="/best" className="text-white">Best</Link>
          <Link href="/about" className="text-white">About Us</Link>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        {status === 'authenticated' ? (
          <>
            <div className="text-white">{session.user?.name}</div>
            {session.user?.image && (
              <img src={session.user.image} alt="Profile" className="w-10 h-10 rounded-full" />
            )}
          </>
        ) : (
          <Link href="/auth/signin" className="text-white">Sign In</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
