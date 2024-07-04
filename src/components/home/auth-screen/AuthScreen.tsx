import React from 'react'
import HeroSection from './HeroSection';
import { TodaysHighlight } from './TodaysHighlight';
import { ModeToggle } from '@/components/ModeToggle';
import RotatedText from '@/components/decorators/RotatedText';
import MasonryGrid from './MasonryGrid';
import Companies from './Companies';

const AuthScreen = () => {
  return (
    <div className="flex flex-col">
        <ModeToggle />
        <HeroSection />

        <div className='mb-20 mt-12'>
            <div className='max-w-6xl mx-auto px-4'>
                <p className='text-3xl md:text-5xl tracking-tight mt-4 mb-8 font-semibold text-center'>
                    Today's <RotatedText> Top Newsletters </RotatedText>
                </p> 
                
                <MasonryGrid />
                <Companies />
            </div>       

        </div>

    </div>
  );
};

export default AuthScreen;