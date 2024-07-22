"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { HomeIcon, SettingsIcon, LogOutIcon, UserIcon } from "lucide-react";

export function UserOptionsMenu() {
  const { data: session } = useSession();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogin = () => {
    router.push('/login');
  };

  const handleLogout = () => {
    // Add your logout logic here
    // signOut();
  };

  if (!mounted) {
    return null;
  }

  const getFirstName = () => {
    if (session && session.user && session.user.name) {
      return session.user.name.split(" ")[0];
    }
    return '';
  };

  return (
    <div className="flex flex-col gap-2">
      {session && session.user ? (
        <>
          <div className="flex items-center gap-2">
            {session.user.image ? (
              <img
                src={session.user.image}
                alt="User Image"
                className="w-8 h-8 rounded-full"
              />
            ) : (
              <UserIcon className="w-8 h-8" />
            )}
            <span>Hello, {getFirstName()}</span>!{/* Display first name with greeting */}
          </div>
          <Link href="/dashboard" className="flex items-center gap-2 transition-colors hover:text-primary" prefetch={false}>
            <HomeIcon className="w-5 h-7" />
            Dashboard
          </Link>
          <Link href="/settings" className="flex items-center gap-2 transition-colors hover:text-primary" prefetch={false}>
            <SettingsIcon className="w-5 h-7" />
            Settings
          </Link>
          <Button onClick={handleLogout} className="flex items-center gap-2 mb-3 text-sm font-medium">
            <LogOutIcon className="w-5 h-5" />
            Logout
          </Button>
        </>
      ) : (
        <Button onClick={handleLogin} className="flex items-center gap-2 text-sm font-medium">
          <UserIcon className="w-5 h-5" />
          Login
        </Button>
      )}
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full transition-colors hover:text-primary"
      >
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    </div>
  );
}
