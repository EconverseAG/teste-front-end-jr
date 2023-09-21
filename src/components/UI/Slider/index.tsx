import { ReactNode } from 'react';
import { Swiper } from 'swiper/react';
import { Keyboard, Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import './styles.scss';

interface SliderProps {
  children: ReactNode;
}

export function Slider({ children }: SliderProps) {
  return (
    <Swiper
      modules={[Keyboard, Navigation]}
      className='slider'
      spaceBetween={90}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      keyboard
      navigation={true}
    >
      {children}
    </Swiper>
  )
}
