"use client";

import { useEffect, useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useSession, signOut } from "next-auth/react";
import { DashboardIcon } from "@radix-ui/react-icons";
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';

export function UserDropdownMenu() {
  const { data: session } = useSession();
  const router = useRouter();
  const { theme } = useTheme(); // Access the theme from next-themes
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Specify the type of the ref

  useEffect(() => {
    setIsMounted(true);

    const handleClickOutside = (event: Event) => { // Specify the type of the event
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!isMounted || !session) {
    return null;
  }

  // Extract first name from session user name
  const firstName = session.user?.name?.split(' ')[0];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const navigateToDashboard = () => {
    router.push('/dashboard');
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Button variant="ghost" size="icon" className="rounded-full" onClick={toggleDropdown}>
        <Avatar>
          <AvatarImage src={session.user?.image || "/placeholder-user.jpg"} />
          <AvatarFallback>{session.user?.name?.charAt(0)}</AvatarFallback>
        </Avatar>
      </Button>
      <div
        className={`absolute right-0 mt-2 w-56 border rounded-md shadow-lg transition-all duration-300 ease-in-out transform ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'} z-50`}
        style={{ transformOrigin: 'top right' }}
      >
        <div className="p-4">
          <p className="text-sm font-medium">Welcome back <span className="font-bold text-primary">{firstName} </span>!</p>
        </div>
        <div className="flex items-center p-4 space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer" onClick={navigateToDashboard}>
          <DashboardIcon className="w-4 h-4" />
          <span>Dashboard</span>
        </div>
        <div className="border-t">
          <div className="flex items-center p-4 space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer" onClick={() => signOut()}>
            <LogOutIcon className="w-4 h-4" />
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const LogOutIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
};
