"use client";

import LeftSidebar from "./leftsidebar/LeftSidebar";
import RightSidebar from "./rightsidebar/RightSidebar"; 
import { CentralBody } from "./centralbody/CentralBody"; 

export function DashboardUserFeed() {
  return (
    <div className="flex min-h-screen w-full dark:bg-[#222]">
      <LeftSidebar />
      <CentralBody /> 
      <RightSidebar /> 
    </div>
  );
}
