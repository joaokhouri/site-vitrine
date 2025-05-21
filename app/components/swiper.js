// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';

const slides = [
  { id: 1, image: 'https://placehold.co/1200x600/png?text=Imagem+1', alt: 'Slide 1' },
  { id: 2, image: 'https://placehold.co/1200x600/png?text=Imagem+2', alt: 'Slide 2' },
  { id: 3, image: 'https://placehold.co/1200x600/png?text=Imagem+3', alt: 'Slide 3' },
  { id: 4, image: 'https://placehold.co/1200x600/png?text=Imagem+4', alt: 'Slide 4' },
  { id: 5, image: 'https://placehold.co/1200x600/png?text=Imagem+5', alt: 'Slide 5' },
];

export default function SwiperContainer() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop={true}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="rounded-2xl w-full aspect-[16/5] h-[200px] sm:h-[350px]"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Image
            src={slide.image}
            width="800"
            height="600"
            alt={slide.alt}
            className="object-cover w-full h-full"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
