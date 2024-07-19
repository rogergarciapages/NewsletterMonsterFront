// src/components/HeroSection.tsx
"use client";

import Image from "next/image";
import AuthButtons from "../auth-screen/AuthButtons";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const images = [
  "/featured/slider/image1.webp",
  "/featured/slider/image2.webp",
  "/featured/slider/image3.webp",
  "/featured/slider/image4.webp",
  "/featured/slider/image5.webp",
  "/featured/slider/image6.webp",
  "/featured/slider/image7.webp",
  "/featured/slider/image8.webp",
  "/featured/slider/image9.webp",
  "/featured/slider/image10.webp",
  "/featured/slider/image11.webp",
  "/featured/slider/image12.webp",
  "/featured/slider/image13.webp",
  "/featured/slider/image14.webp",
  "/featured/slider/image15.webp",
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 500); // Change image every 500ms (0.5 seconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex h-screen w-full'>
      <div className='flex-1 flex overflow-hidden bg-[#171717] relative justify-center items-center z-10'>
        <img
          src="/logo.svg"
          alt="logo NewsletterMonster App"
          className="absolute -left-1/4 opacity-15 -bottom-52 lg:scale-150 xl:scale-105 scale-[2] pointer-events-none select-none"
        />
        <div className='flex flex-col mx-auto gap-2 px-4 xl:ml-40 mr-40 text-center md:text-start'>
          <h1 className="text-2xl font-bold leading-snug md:text-5xl text-[#fc0036] pt-3 text-balance">
            The Ultimate Newsletter Archive
          </h1>
          <p className="mt-3 mb-3 text-2xl leading-snug text-balance font-thin text-white dark:text-white lg:w-4/5">
            Discover and celebrate the art and creativity of newsletters.
            <br />
            We preserve stunning designs and captivating content, ensuring they
            are never lost in your inbox. Explore our archive and enjoy the best
            newsletters, all in one place.
          </p>
          <AuthButtons />
        </div>
      </div>

      <div className="flex-1 relative overflow-hidden justify-center items-center hidden md:flex">
        <Image
          src={images[currentImageIndex]}
          alt={"The internet newsletter archive app"}
          fill
          priority
          className="object-cover opacity-90 pointer-events-none select-none height-full object-top transition-opacity duration-500"
        />
      </div>
    </div>
  );
};

export default HeroSection;
