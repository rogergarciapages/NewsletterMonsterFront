// C:\Users\Usuario\Documents\GitHub\nm3\src\components\home\home-screen\HomeScreen.tsx

import React from 'react';
import HeroSection from './HeroSection';
import RotatedText from '@/components/decorators/RotatedText';
import MasonryGrid from './MasonryGrid';
import Companies from './Companies';
import Mission from './Mission';
import EmailCopy from '@/components/EmailCopy';
import H2TextBlock from '@/components/h2block';
import PricingWrapper from '@/components/Pricing';
import { AnimatedList } from './animated-list';

const HomeScreen = () => {
  return (
    <div className="flex w-full flex-col mt-0">
      <HeroSection />
      <div className="mb-20 mt-12">
        <div className="max-w-6xl mx-auto px-4">

          <Mission />

          <EmailCopy />
          <p className="text-3xl md:text-5xl tracking-tight mt-4 mb-8 font-semibold text-center">
            Today's <RotatedText> Top Newsletters </RotatedText>
          </p>
          
          <MasonryGrid />
          <Companies />

          <PricingWrapper />
          <H2TextBlock
            heading="SEO Newsletter Advantages"
            text="We strive to archive newsletters, ensuring that their stunning art and captivating photography are preserved for all to admire."
          />
          <H2TextBlock
            heading="Design Recognition"
            text="Stand out with your newsletter's design excellence. By being featured on our site, you enhance your brand's credibility and reputation, demonstrating your commitment to top-tier marketing practices and design standards."
          />

        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
