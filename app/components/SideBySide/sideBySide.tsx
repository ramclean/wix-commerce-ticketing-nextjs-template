'use client';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import { URL } from 'url';

export interface ContentWithImageProps {
  /**
   * Main title text
   */
  title: string;

  /**
   * Description paragraph text
   */
  description: string;

  /**
   * Optional button text. If not provided, button won't be rendered
   */
  buttonText?: string;

  /**
   * Button click handler
   */
  onButtonClick: string;

  /**
   * Main image source (can be URL string or imported image)
   */
  mainImage: string | StaticImageData;

  /**
   * Array of small images to display at the bottom (can be URL strings or imported images)
   */
  smallImages?: (string | StaticImageData)[];

  /**
   * Whether to reverse the layout (image on left instead of right)
   * @default false
   */
  reverse?: boolean;

  /**
   * Background color class for the image section
   * @default "bg-white"
   */
  backgroundColor?: string;

  /**
   * Image to show only on mobile/tablet views
   */
  mobileImage?: string | StaticImageData;

  /**
   * Alt text for images
   * @default ""
   */
  altText?: string;
  btnClass: string;
  children?: React.ReactNode;
}

const ContentWithImage: React.FC<ContentWithImageProps> = ({
  title,
  description,
  buttonText,
  onButtonClick,
  mainImage,
  smallImages = [],
  reverse = false,
  backgroundColor,
  mobileImage,
  altText = '',
  btnClass,
  children,
}) => {
  return (
    <div className={`w-full overflow-hidden ${backgroundColor}`}>
      {/* Mobile/Tablet only image */}
      {mobileImage && (
        <div className="w-full md:hidden">
          <Image
            src={mobileImage}
            width={1200}
            height={600}
            alt={altText}
            className="w-full"
          />
        </div>
      )}

      <div
        className={`flex gap-2 sm:gap-14 px-4 lg:px-8     ${
          reverse
            ? 'flex-col-reverse sm:flex-row-reverse'
            : 'flex-col sm:flex-row'
        }`}
      >
        <div className="text-custom-1 text-center sm:text-left pt-10 sm:py-20 w-full sm:w-1/2">
          <h1 className="uppercase lg:text-7xl sm:text-4xl md:text-4xl text-center sm:text-left text-black max-w-full overflow-hidden">
            {title}
          </h1>
          <p className="text-lg mt-5 text-black max-w-full">{description}</p>
          {buttonText && onButtonClick && (
            <>
              <div>
                <Link href={onButtonClick} passHref>
                  <span
                    className={`btn-${btnClass} rounded my-8 inline-block cursor-pointer`}
                  >
                    {buttonText}
                  </span>
                </Link>
              </div>
              <div>{children}</div>
            </>
          )}
          {smallImages.length > 0 && (
            <div className="flex flex-wrap justify-center lg:flex-nowrap items-center opacity-80 gap-2">
              {smallImages.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  width={600}
                  height={600}
                  alt={altText}
                  className="rounded-lg w-[150px] max-w-[25%] lg:max-w-[150px]"
                />
              ))}
            </div>
          )}
        </div>

        <div
          className={`mt-10 hidden sm:block w-full sm:w-1/2 ${backgroundColor}`}
        >
          <Image
            src={mainImage}
            width={600}
            height={600}
            alt={altText}
            className="opacity-90 w-full p-10"
          />
        </div>
      </div>
    </div>
  );
};

export default ContentWithImage;
