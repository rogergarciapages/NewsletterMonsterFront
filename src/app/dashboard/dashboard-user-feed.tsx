"use client";

import LeftSidebar from "./leftsidebar/LeftSidebar";
import RightSidebar from "./rightsidebar/RightSidebar";
import { CentralBody } from "./centralbody/CentralBody";

export function DashboardUserFeed() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full dark:bg-[#222]">
      <LeftSidebar />
      <div className="flex-1">
        <CentralBody />
      </div>
      <RightSidebar />
    </div>
  );
}
