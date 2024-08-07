// src/components/component/login-block.tsx

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState, FC } from "react";

interface LoginBlockProps {
  onRegisterClick: () => void;
}

const dotPatternStyledark = {
  background: `
    linear-gradient(90deg, #212121 calc(50px - 1px), transparent 1%) center / 50px 50px,
    linear-gradient(#212121 calc(50px - 1px), transparent 1%) center / 50px 50px,
    #fff
  `,
};

const dotPatternStyle = {
  background: `
    linear-gradient(90deg, #212121 calc(50px - 1px), transparent 1%) center / 50px 50px,
    linear-gradient(#212121 calc(50px - 1px), transparent 1%) center / 50px 50px,
    #222
  `,
};

export const LoginBlock: FC<LoginBlockProps> = ({ onRegisterClick }) => {
  const [error, setError] = useState<string | null>(null);

  const handleLoginSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const email = (event.target as any).email.value;
    const password = (event.target as any).password.value;

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setError(result.error);
    } else {
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="grid w-full min-h-screen grid-cols-1 lg:grid-cols-2">
      <div className="relative flex items-center justify-center p-6 lg:p-12" style={dotPatternStyledark}>
        <div className="relative max-w-[480px] space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Welcome to Newsletter Monster!
            </h1>
            <p className="text-gray-700 dark:text-white md:text-xl">
              Sign up and start expanding your newsletter reach today.
            </p>
          </div>
          <Button variant="outline" onClick={onRegisterClick} className="flex items-center justify-center border-primary text-primary dark:text-white hover:bg-secondary hover:border-secondary transition duration-300">
            Sign up <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center p-6 lg:p-12">
        <div className="mx-auto w-full max-w-[480px] space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Sign in to your account</h2>
            <p className="text-gray-700 dark:text-gray-200">
              Enter your email and password below to sign in.
            </p>
          </div>
          {error && <div className="text-red-500 text-center">{error}</div>}
          <div className="space-y-4">
            <form onSubmit={handleLoginSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="myemail@myawesomecompany.com" required className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="#" className="text-sm font-medium text-primary hover:underline" prefetch={false}>
                    Forgot password?
                  </Link>
                </div>
                <Input id="password" type="password" required className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
              </div>
              <Button type="submit" className="w-full flex items-center justify-center px-4 py-2 bg-primary text-white rounded-md hover:bg-muted transition duration-300">
                Sign in <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-[#222] hover:bg-primary dark:text-white hover:text-white transition duration-300" onClick={() => signIn("google")}>
                <ChromeIcon className="mr-2 ml-2 h-4 w-4 text-[#222] dark:text-gray-300" />
                Sign in with Google
              </Button>
            </form>
          </div>
          <div className="text-center text-sm text-gray-600 dark:text-white">
            Don't have an account yet?{" "}
            <Link href="#" className="underline hover:text-primary" prefetch={false} onClick={onRegisterClick}>
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const ArrowRightIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-white ml-2"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const ChromeIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    className="text-[#fff] mr-2"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
    <line x1="21.17" x2="12" y1="8" y2="8" />
    <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
    <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
  </svg>
);
