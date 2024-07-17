import React from 'react';
import { NavBar } from '@/components/Navbar';
import HomeScreen from '@/components/home/home-screen/HomeScreen';

const HomePage = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <NavBar />
      <HomeScreen />
    </main>
  );
};

export default HomePage;
