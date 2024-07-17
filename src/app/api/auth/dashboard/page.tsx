import React from 'react';
import { NavBar } from '@/components/Navbar';
import DashboardContent from '@/components/dashboard/DashboardContent';

const DashboardPage = () => {
  return (
    <main className="max-w-8xl mx-auto my-1 space-y-5">
      <NavBar />
      <DashboardContent />
    </main>
  );
};

export default DashboardPage;
