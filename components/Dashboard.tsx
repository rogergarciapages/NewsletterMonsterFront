"use client";

import AuthScreen from "@/components/home/auth-screen/AuthScreen";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const Dashboard = () => {
  const { data: session } = useSession();

  return (
<AuthScreen />
  );
};

export default Dashboard;