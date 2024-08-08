// src/components/home/home-screen/hero-landing.tsx
import { Button } from "@/components/ui/button";
import ImageSlider from "@/components/home/home-screen/ImageSlider";
import BriefcaseIcon from "@/assets/BriefcaseIcon";
import RocketIcon from "@/assets/RocketIcon";
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
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-cheese"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4.519 20.008l16.481 -.008v-3.5a2 2 0 1 1 0 -4v-3.5h-16.722" /><path d="M21 9l-9.385 -4.992c-2.512 .12 -4.758 1.42 -6.327 3.425c-1.423 1.82 -2.288 4.221 -2.288 6.854c0 2.117 .56 4.085 1.519 5.721" /><path d="M15 13v.01" /><path d="M8 13v.01" /><path d="M11 16v.01" /></svg>
                  <span className="pr-6 pt-1 text-md text-gray-100">Expand your Newsletter reach FREE!</span>
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
