"use client";

import LeftSidebar from "./leftsidebar/LeftSidebar"; // Adjust the import path for the LeftSidebar component
import RightSidebar from "./rightsidebar/RightSidebar"; // Import the RightSidebar component
import { CentralBody } from "./centralbody/CentralBody"; // Import the CentralBody component

export function DashboardUserFeed() {
  return (
    <div className="flex min-h-screen w-full dark:bg-[#222]">
      <LeftSidebar /> {/* Use the LeftSidebar component */}
      <CentralBody /> {/* Use the CentralBody component */}
      <RightSidebar /> {/* Use the RightSidebar component */}
    </div>
  );
}
