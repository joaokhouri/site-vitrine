'use client';
import Image from 'next/image';
import SwiperContainer from './components/swiper';
import MaisProcurados from './components/maisProcurados';

export default function Home() {
  return (
    <main className="px-[9vw]">
      <SwiperContainer />
      <MaisProcurados />
    </main>
  );
}
