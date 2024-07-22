"use client";

import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { UserDropdownMenu } from "@/components/ui/user-dropdown-menu";
import { UserOptionsMenu } from "@/components/ui/UserOptionsMenu"; 

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export function NavBar() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Logo />
          <Badge
            variant="secondary"
            className="bg-[#ffd000] text-xs text-[#222] -ml-4 -rotate-6 rounded-sm select-none pointer-events-none"
          >
            Beta<span className="text-[7px] pl-1">{" "}0.65</span>
          </Badge>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="/" className="transition-colors hover:text-primary" prefetch={false}>
            Home
          </Link>
          <Link href="/most-popular" className="transition-colors hover:text-primary" prefetch={false}>
            Most Popular
          </Link>
          <Link href="/categories" className="transition-colors hover:text-primary" prefetch={false}>
            Categories
          </Link>
          <Link href="/blog" className="transition-colors hover:text-primary" prefetch={false}>
            Blog
          </Link>
          <Link href="/about" className="transition-colors hover:text-primary" prefetch={false}>
            About
          </Link>
          <div className="flex items-center align-middle text-primary mx-auto gap-2 border-ring md:flex-column sm:flex-column">
            {session ? (
              <UserDropdownMenu />
            ) : (
              <Button onClick={handleLogin} className="text-xs pt-1 pb-1 m-0 h-6 font-medium hover:bg-[#ccc]">
                Login
              </Button>
            )}
          </div>
          <ModeToggle /> {/* Retain ModeToggle for desktop */}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-xs">
            <nav className="grid gap-4 px-2 py-1 text-sm font-medium">
              <Link href="/" className="transition-colors hover:text-primary" prefetch={false}>
                Home
              </Link>
              <Link href="/most-popular" className="transition-colors hover:text-primary" prefetch={false}>
                Most Popular
              </Link>
              <Link href="/categories" className="transition-colors hover:text-primary" prefetch={false}>
                Categories
              </Link>
              <Link href="/blog" className="transition-colors hover:text-primary" prefetch={false}>
                Blog
              </Link>
              <Link href="/about" className="transition-colors hover:text-primary" prefetch={false}>
                About
              </Link>
              <UserOptionsMenu /> {/* Include UserOptionsMenu for mobile */}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function MenuIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="0"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function XIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="0"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
