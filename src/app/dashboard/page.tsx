import React from 'react';
import { NavBar } from '@/components/Navbar';
import { DashboardUserFeed } from './dashboard-user-feed';

const DashboardPage = () => {
  return (
    <main className="max-w-[1400px] mx-auto space-y-5">
      <NavBar />
      <DashboardUserFeed />
    </main>
  );
};

export default DashboardPage;
