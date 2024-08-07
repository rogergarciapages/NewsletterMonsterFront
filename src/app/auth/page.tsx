// src/app/auth/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import RegisterForm from "@/components/home/auth-screen/RegisterForm";
import { NavBar } from "@/components/Navbar";
import SignOutButton from "@/components/SignOutButton";
import { LoginBlock } from "@/components/ui/login-block";

const AuthPage: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isRegister, setIsRegister] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        {isRegister ? (
          <>
            <h1 className="text-3xl font-bold text-center mb-4">Sign Up</h1>
            <RegisterForm />
            <p className="mt-4 text-center">
              Already have an account?{" "}
              <a onClick={() => setIsRegister(false)} className="text-blue-600 cursor-pointer">
                Sign In
              </a>
            </p>
          </>
        ) : (
          <LoginBlock onRegisterClick={() => setIsRegister(true)} />
        )}
      </div>

    </>
  );
};

export default AuthPage;
