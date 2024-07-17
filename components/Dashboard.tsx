"use client";

import AuthScreen from "@/components/home/auth-screen/AuthScreen";
import { useSession } from "next-auth/react";
import React from "react";

const Dashboard = () => {
  const { data: session } = useSession();

  if (!session) {
    return <div>Please sign in to access the dashboard.</div>;
  }

  return (
    <div>
      <AuthScreen />
      {/* Additional dashboard content */}
    </div>
  );
};

export default Dashboard;
