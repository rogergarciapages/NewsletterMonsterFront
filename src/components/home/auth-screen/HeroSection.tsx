import  Image from "next/image"
import AuthButtons from "./AuthButtons";

const HeroSection = () => {
  return (
    <div className='flex  h-screen x-full'>
        <div className='flex-1  flex overflow-hidden bg-[#171717] relative  justify-center items-center z-10'>
            <img src="/logo.svg" alt="logo NewsletterMonster App" 
            className="absolute -left-1/4  opacity-15 -bottom-52  lg:scale-150  xl:scale-105 scale-[2]
            pointer-events-none select-none"
            />
        
        <div className='flex flex-col gap-2  px-4  xl:ml-40 text-center md:text-start font-semibold'>
            <Image
             src={"/header_dark_logo.png"}
             alt={"NewsletterMonster Logo"}
             width={769}
             height={182}
             className="mt-20 w-[420px] z-0 pointer-events-none select-none"
            />
            <h1 className="text-2xl md:text-5xl text-[#fc0036] pt-3 text-balance">One newsletter Archive to rule them all!</h1>
            <p className="mt-3 mb-3 text-2xl leading-snug text-balance font-thin text-white dark:text-white lg:w-4/5"> 
            We cherish the beauty and creativity of newsletters. <br/> 
            Our mission is to archive these mailing masterpieces, ensuring that their stunning art, captivating photography, and the hard work of their creators are preserved and celebrated. No longer will these treasures be lost in overflowing inboxes — they'll be archived for all to enjoy and admire.</p>
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