'use client';
import { Carousel, Flowbite, useTheme } from 'flowbite-react';
import { products } from '@wix/stores';
import { PLACEHOLDER_IMAGE } from '@app/constants';
import { WixMediaImage } from '@app/components/Image/WixMediaImage';
export function ImageGalleryClient({ items }: { items: products.MediaItem[] }) {
  const { theme } = useTheme();
  const images = items.length ? items : [{ image: { url: PLACEHOLDER_IMAGE } }];

  return (
    <div className="min-h-[400px] h-auto w-full max-w-4xl mx-auto">
      <Flowbite
        theme={{
          theme: {
            carousel: {
              scrollContainer: {
                ...theme.carousel.scrollContainer,
                base:
                  theme.carousel.scrollContainer.base + ' rounded-none h-full',
              },
            },
          },
        }}
      >
        <Carousel slide={false} className="h-full">
          {images.map((media, index) => (
            <div key={index} className="relative h-full">
              <img
                src={media.image?.url}
                alt={media.image?.altText || 'Lughole shop item'}
              />
            </div>
          ))}
        </Carousel>
      </Flowbite>
    </div>
  );
}
