import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

// Define types for props
interface IconProps extends React.SVGProps<SVGSVGElement> {}

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Image src="/LogoNewslettermonster.svg" alt="Logo" width={24} height={24} className="h-6 w-6" />
          <Badge
            variant="secondary"
            className="bg-[#ffd000] text-xs text-secondary -ml-4 -rotate-6 rounded-sm select-none pointer-events-none"
          >
            Beta v<span className="text-[9px]"> 0.65</span>
          </Badge>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="#" className="transition-colors hover:text-primary" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="transition-colors hover:text-primary" prefetch={false}>
            Most Popular
          </Link>
          <Link href="#" className="transition-colors hover:text-primary" prefetch={false}>
            Categories
          </Link>
          <Link href="#" className="transition-colors hover:text-primary" prefetch={false}>
            Blog
          </Link>
          <Link href="#" className="transition-colors hover:text-primary" prefetch={false}>
            About
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="#"
              className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-[#ccc] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Login
            </Link>
          </div>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-xs">
            <nav className="grid gap-4 px-4 py-6 text-sm font-medium">
              <Link href="#" className="transition-colors hover:text-primary" prefetch={false}>
                Home
              </Link>
              <Link href="#" className="transition-colors hover:text-primary" prefetch={false}>
                Most Popular
              </Link>
              <Link href="#" className="transition-colors hover:text-primary" prefetch={false}>
                Categories
              </Link>
              <Link href="#" className="transition-colors hover:text-primary" prefetch={false}>
                Blog
              </Link>
              <Link href="#" className="transition-colors hover:text-primary" prefetch={false}>
                About
              </Link>
              <div className="flex items-center gap-2">
                <Link
                  href="#"
                  className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Login
                </Link>
              </div>
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
      strokeWidth="2"
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
