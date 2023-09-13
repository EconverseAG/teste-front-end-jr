import CarouselCard from "./CarouselCard";
import styles from './Carousel.module.scss'

import { Navigation, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Carousel() {
  return(
    <div className={styles.container}>

    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={30}
      slidesPerView={4}
      navigation
      className={styles.swiperBox}
      >

      <SwiperSlide><CarouselCard /></SwiperSlide>
      <SwiperSlide><CarouselCard /></SwiperSlide>
      <SwiperSlide><CarouselCard /></SwiperSlide>
      <SwiperSlide><CarouselCard /></SwiperSlide>
      <SwiperSlide  ><CarouselCard /></SwiperSlide>
    </Swiper>

        </div>
  )
}