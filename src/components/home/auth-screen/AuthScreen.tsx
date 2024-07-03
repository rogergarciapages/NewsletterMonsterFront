import React from 'react'
import HeroSection from './HeroSection';
import { TodaysHighlight } from './TodaysHighlight';
import { ModeToggle } from '@/components/ModeToggle';

const AuthScreen = () => {
  return (
    <div className="flex flex-col">
        <ModeToggle />
        <HeroSection />
        <TodaysHighlight />

    </div>
  );
};

export default AuthScreen;