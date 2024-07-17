"use client";

import  Image from "next/image"
import AuthButtons from "../auth-screen/AuthButtons";
import { useSession } from "next-auth/react";
/*const { data: session } = useSession();*/

const HeroSection = () => {
  return (
    <div className='flex h-screen w-full x-full'>
        <div className='flex-1 flex overflow-hidden bg-[#171717] relative justify-center items-center z-10'>
            <img src="/logo.svg" alt="logo NewsletterMonster App" 
            className="absolute -left-1/4  opacity-15 -bottom-52  lg:scale-150  xl:scale-105 scale-[2]
            pointer-events-none select-none"
            />
        
        <div className='flex flex-col mx-auto gap-2 px-4 xl:ml-40 mr-40 text-center md:text-start font-semibold'>
            <h1 className="text-2xl md:text-5xl text-[#fc0036] pt-3 text-balance">The Ultimate Newsletter Archive</h1>
            <p className="mt-3 mb-3 text-2xl leading-snug text-balance font-thin text-white dark:text-white lg:w-4/5"> 
            Discover and celebrate the art and creativity of newsletters. <br />We preserve stunning designs and captivating content, ensuring they are never lost in your inbox. Explore our archive and enjoy the best newsletters, all in one place.</p>
            <AuthButtons  />
            </div>
        </div>

        <div className="flex-1 relative overflow-hidden justify-center items-center  hidden  md:flex">
        <Image
             src={"/image9.webp"}
             alt={"The internet newsletter archive app"}
             fill
             className="object-cover opacity-90 pointer-events-none select-none height-full"
            />

        </div>

    </div>
 );
};

export default HeroSection;