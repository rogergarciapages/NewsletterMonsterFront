import React from 'react';
import Image from "next/image";

interface ImageSliderProps {
  currentImageIndex: number;
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ currentImageIndex, images }) => {
  // Ensure both currentImageIndex and images are valid
  const imageSrc = images?.[currentImageIndex];

  if (!imageSrc) {
    // Render a fallback UI if the imageSrc is not available
    return (
      <div className="flex items-center justify-center w-full h-full">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Image
      src={imageSrc}
      alt="The internet newsletter archive app"
      fill
      priority
      className="object-cover opacity-90 mt-14 pointer-events-none select-none height-full object-top transition-opacity duration-500"
    />
  );
};

export default ImageSlider;
