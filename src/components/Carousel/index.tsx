import CarouselCard from "./CarouselCard";
import styles from './Carousel.module.scss'

// import Swiper core and required modules
import { Navigation, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Carousel() {
  return(
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={64}
      slidesPerView={4}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      centeredSlides
      className={styles.container}
    >
      <SwiperSlide><CarouselCard /></SwiperSlide>
      <SwiperSlide><CarouselCard /></SwiperSlide>
      <SwiperSlide><CarouselCard /></SwiperSlide>
      <SwiperSlide><CarouselCard /></SwiperSlide>
      <SwiperSlide  ><CarouselCard /></SwiperSlide>
    </Swiper>

  )
}