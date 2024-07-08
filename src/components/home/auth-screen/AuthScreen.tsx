import React from 'react'
import HeroSection from './HeroSection';
import { TodaysHighlight } from './TodaysHighlight';
import { ModeToggle } from '@/components/ModeToggle';
import RotatedText from '@/components/decorators/RotatedText';
import MasonryGrid from './MasonryGrid';
import Companies from './Companies';
import Mission from '../home-screen/Mission';
import Footer from '../Footer';
import H2block from '@/components/h2block';
import EmailCopy from '@/components/EmailCopy';
import H2TextBlock from '@/components/h2block';

const AuthScreen = () => {
  return (
    <div className="flex flex-col">
        <HeroSection />

        <div className='mb-20 mt-12'>
            <div className='max-w-6xl mx-auto px-4'>
                <p className='text-3xl md:text-5xl tracking-tight mt-4 mb-8 font-semibold text-center'>
                    Today's <RotatedText> Top Newsletters </RotatedText>
                </p> 
                
                <MasonryGrid />
                <Companies />
                <Mission />
                <H2TextBlock 
                heading="Our Mission"
                text="We strive to archive newsletters, ensuring that their stunning art and captivating photography are preserved for all to admire."
                />
                <EmailCopy />
                <Footer />
            </div>       

        </div>

    </div>
  );
};

export default AuthScreen;