'use client';
import { useState } from 'react';
import Image from 'next/image';

const EventGrid = ({ eventImages }: { eventImages: string[] }) => {
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  const handleCloseFullScreen = () => {
    setFullScreenImage(null); // Close full-screen view
  };

  return (
    <div className="mx-auto px-4 sm:px-14">
      <div className="bg-black text-white py-12">
        <h1 className="text-5xl uppercase animate-fade-in text-center">
          PAST EVENTS
        </h1>

        <p className="text-center mt-4 text-light">
          Click on a flyer to see it in all its glory!
        </p>
      </div>

      <div className="block lg:flex lg:flex-wrap">
        {eventImages.map((image: string, index: number) => (
          <div
            key={index}
            onClick={() => setFullScreenImage(image)} // Trigger full-screen view on click
            className="relative w-full lg:w-1/6 p-2 cursor-pointer group"
          >
            {/* Image */}
            <Image
              src={image}
              alt={'Lughole gig poster'}
              className="w-[600px] h-[300px] object-cover transition duration-300 ease-in-out group-hover:blur-sm"
              width={600}
              height={300}
            />

            {/* Hover Overlay with 'View' text */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              <span className="text-white text-xl font-bold">View</span>
            </div>
          </div>
        ))}
      </div>

      {/* Full-Screen Image Modal */}
      {fullScreenImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            onClick={handleCloseFullScreen}
            className="absolute top-4 right-4 text-white text-4xl font-bold z-50"
          >
            &#10005; {/* This is the "X" character */}
          </button>
          <img
            src={fullScreenImage}
            alt="Full screen view"
            className="max-w-full max-h-full"
          />
        </div>
      )}
    </div>
  );
};

export default EventGrid;
