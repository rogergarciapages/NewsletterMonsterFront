import React from 'react';
import { NavBar } from '@/components/Navbar';
import DashboardContent from '@/components/dashboard/DashboardContent';
import { DashboardUserFeed } from './dashboard-user-feed';

const DashboardPage = () => {
  return (
    <main className="max-w-8xl mx-auto space-y-5">
      <NavBar />
      <DashboardUserFeed />
    </main>
  );
};

export default DashboardPage;
