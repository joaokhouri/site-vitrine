'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../assets/logo.png';
import Image from 'next/image';
import MobileMenu from './mobileMenu';
import SearchMobile from './searchMobile';
import SearchBarC from './searchBar';
import useResponsive from '../hooks/getResponsive';

export default function Header(props) {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { isMobile, isTablet, isDesktop } = useResponsive();

  const options = [
    { value: 'desktop', condition: isDesktop },
    { value: 'tablet', condition: isTablet },
    { value: 'mobile', condition: isMobile },
  ];

  const foundOption = options.find((option) => option.condition);
  const result = foundOption ? foundOption.value : 'detectando'; // safe fallback
  return (
    <header
      className={
        `header ` +
        (isScrolled
          ? `fixed w-full transition z-50 bg-white/20 shadow-lg backdrop-blur-[6.2px]`
          : `sticky z-50 `)
      }
    >
      {props.port === 'mobile' ? (
        <nav className="flex items-center justify-between px-6 py-2">
          <div className="logo-navigation-container leading-none text-xl">
            <Link href="/" className="text-xl leading-none">
              <Image src={Logo} alt="logo" className="w-24 md:w-32 lg:w-40 h-auto" />
            </Link>
          </div>
          <div className="mobile-menu flex ml-auto">
            <SearchBarC port={result} />
            <MobileMenu />
          </div>{' '}
        </nav>
      ) : (
        <nav className="flex items-center justify-between px-[9vw] py-3">
          <div className="logo-navigation-container leading-none text-xl flex justify-between">
            <Link href="/" className="text-xl leading-none">
              <Image src={Logo} alt="logo" className="w-24 md:w-32 lg:w-40 h-auto" />
            </Link>
          </div>

          <SearchBarC port={result} />
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-gray-800 hover:text-gray-600">
              Home
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-gray-600">
              Sobre
            </Link>
            <Link href="/services" className="text-gray-800 hover:text-gray-600">
              Serviços
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-gray-600">
              Contato
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
