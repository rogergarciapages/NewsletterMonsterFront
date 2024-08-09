// src/components/home/home-screen/hero-landing.tsx
import { Cheeseicon } from "@/assets/svg";
import ImageSlider from "@/components/home/home-screen/ImageSlider";
import Arrow31 from "@/components/ui/arrow";

interface HeroLandingProps {
  currentImageIndex: number;
  images: string[];
}

export function HeroLanding({ currentImageIndex, images }: HeroLandingProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-6">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Transform Your Newsletters into SEO Powerhouses
            </h1>
            <p className="max-w-[600px] pb-8 text-muted-foreground md:text-m/relaxed lg:text-base/relaxed xl:text-base/relaxed">
              Empower your newsletters, Archive them beautifully. Boost SEO Instantly. Celebrate the art and creativity of newsletters. Explore our archive and enjoy the best newsletters, all in one place.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
          <div className="px-1 py-1">
          <div className="grid gap-8 items-start justify-center">
            <div className="relative group">
              <div className="absolute -inset-2.5 bg-gradient-to-r from-torch-600 to-indigo-500 rounded-lg blur opacity-75 group-hover:opacity-600 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-black">
                <span className="flex items-center space-x-5">
                <Cheeseicon className="w-7 h-7"/>                  
                <span className="pr-6 pt-1 text-md text-gray-100">
                  Expand your Newsletter reach FREE!</span>
                </span>
                
              </button>
            </div>
          </div>
        </div>
          </div>
          <div className="flex flex-col w-full">
            <p className="min-w-full text-muted-foreground mt-1 md:text-xl/relaxed lg:text-base/relaxed xl:text-l/relaxed">
              Get Started Today and sign Up for Free.
            </p>
            <Arrow31 className="ml-32 -mt-7 -rotate-90" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-full h-[600px] max-w-[600px] overflow-hidden rounded-xl shadow-xl">
            <div className="mockup-browser h-[600px] bg-base-300 border">
              <div className="mockup-browser-toolbar">
                <div className="input">https://newslettermonster.com</div>
              </div>
              <div className="bg-base-900 flex justify-center px-4 py-16">
                <ImageSlider currentImageIndex={currentImageIndex} images={images} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
