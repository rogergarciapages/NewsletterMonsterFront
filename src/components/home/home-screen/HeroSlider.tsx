import { useState, useEffect } from 'react';
import Image from 'next/image';

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

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 700); 

    return () => clearInterval(interval);
  }, []);

  return (
    <Image
      src={images[currentImageIndex]}
      alt={"The internet newsletter archive app"}
      fill
      priority
      className="object-cover opacity-90 pointer-events-none select-none height-full object-top transition-opacity duration-700 -z-100"
    />
  );
};

export default ImageSlider;
