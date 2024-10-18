'use client';
import { NavLink } from './NavLink';
import { useCallback, useState } from 'react';
import type { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navbarMainItems = [
  { ref: '/', label: 'HOME' },
  { ref: '/about', label: 'ABOUT' },
  { ref: '/product-page/membership', label: 'MEMBERSHIP' },
  { ref: '/#events', label: 'EVENTS' },
  { ref: '/shop', label: 'SHOP' },
  { ref: '/contact', label: 'CONTACT' },
];
const StyledNavLink = ({
  isActive,
  className,
  ...linkProps
}: LinkProps & {
  isActive: boolean;
  children: React.ReactNode;
  className?: string;
}) => (
  <NavLink
    className={`${className ?? ''} ${
      isActive ? 'text-purple-300' : 'hover:text-gray-400'
    }`}
    {...linkProps}
  />
);

export function NavBar() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const pathname = usePathname();
  const [linkRef, setLinkRef] = useState<LinkProps['href']>(pathname!);
  const toggleOpen = useCallback(
    () => setIsMenuShown(!isMenuShown),
    [isMenuShown]
  );

  return (
    <>
      <button className="relative z-50 mt-2" onClick={toggleOpen}>
        <div className="space-y-2">
          {(isMenuShown
            ? [
                'rotate-45 translate-y-[13px] bg-white',
                'opacity-0 h-0',
                '-rotate-45 translate-y-[-13px] bg-white',
              ]
            : ['bg-white', 'bg-white', 'bg-white']
          ).map((className, index) => (
            <span
              key={index}
              className={
                'block h-[4px] w-8 transform transition duration-500 ease-in-out ' +
                className
              }
            ></span>
          ))}
        </div>
      </button>
      <nav
        className={`${
          isMenuShown ? 'w-full opacity-100' : 'w-0 opacity-0'
        } transition-all duration-500 ease-in-out block overflow-hidden fixed animate-sideways-once h-screen bg-black text-white pt-8 z-40 top-0 right-0`}
      >
        <div className="relative flex flex-col-reverse sm:flex-col gap-2">
          <div className="h-[180px] w-[140px] overflow-hidden sm:h-auto sm:w-auto mx-auto">
            <Image
              className="mx-auto z-10"
              src="https://static.wixstatic.com/media/4e0344_fabfb4d720224910a1bba683f675a427~mv2.jpg/v1/fill/w_1296,h_1200,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4e0344_fabfb4d720224910a1bba683f675a427~mv2.jpg"
              width={240}
              height={500}
              alt="Talisa Kidd"
            />
          </div>
        </div>
        <ul className="flex flex-col items-center gap-4 justify-end mt-4 sm:mt-[50px]">
          {navbarMainItems.map(({ ref, label }) => (
            <li key={ref} className="relative">
              <StyledNavLink
                className="text-lg"
                isActive={ref === linkRef}
                href={ref}
                onClick={() => {
                  setLinkRef(ref);
                  setIsMenuShown(false);
                }}
              >
                {label}
              </StyledNavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
