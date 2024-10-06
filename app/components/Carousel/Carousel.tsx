'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Carousel({ images: images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((current) => (current + 1) % images.length);
        setIsTransitioning(false);
      }, 3000); // Half of transition duration
    }, 6000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      <div
        className={`w-full h-full transition-opacity duration-1000 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Image
          src={images[currentIndex]}
          alt={`lughole image ${currentIndex + 1}`}
          className="w-full h-full"
          width={900}
          height={500}
        />
      </div>
      {/* <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_: any, index: number) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div> */}
    </div>
  );
}
