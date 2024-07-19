// src/components/hero-landing.tsx
import { Button } from "@/components/ui/button";
import ImageSlider from "@/components/home/home-screen/ImageSlider";
import BriefcaseIcon from "@/assets/BriefcaseIcon";
import RocketIcon from "@/assets/RocketIcon";

interface HeroLandingProps {
  currentImageIndex: number;
  images: string[];
}

export function HeroLanding({ currentImageIndex, images }: HeroLandingProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              The Ultimate Newsletter Archive
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Empower your newsletters, discover and celebrate the art and
              creativity of newsletters. No more lost art. Explore our archive
              and enjoy the best newsletters, all in one place.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="flex items-center gap-2">
              <RocketIcon className="h-5 w-5" />
              Get Started
            </Button>
            <Button variant="secondary" size="lg" className="flex items-center gap-2">
              <BriefcaseIcon className="h-5 w-5" />
              Contact Sales
            </Button>
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
