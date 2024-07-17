import React from 'react';
import { NavBar } from '@/components/Navbar';
import HomeScreen from '@/components/home/home-screen/HomeScreen';

const HomePage = () => {
  return (
    <main className="max-w-8xl mx-auto my-1 space-y-1">
      <NavBar />
      <HomeScreen />
    </main>
  );
};

export default HomePage;
