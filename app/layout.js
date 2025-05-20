'use client';
import Header from './components/header';
import useResponsive from './hooks/getResponsive';
import './globals.css';

import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({ children }) {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  const options = [
    { value: 'desktop', condition: isDesktop },
    { value: 'tablet', condition: isTablet },
    { value: 'mobile', condition: isMobile },
  ];

  const foundOption = options.find((option) => option.condition);
  const result = foundOption ? foundOption.value : 'detectando'; // safe fallback

  return (
    <html lang="pt-br">
      <body className={`${inter.className} antialiased`}>
        <Header port={result} />
        <main className={result === 'desktop' ? 'pt-20' : null}>{children}</main>
      </body>
    </html>
  );
}
