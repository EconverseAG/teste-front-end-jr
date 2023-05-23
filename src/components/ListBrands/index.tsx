import arrowRight from "../../assets/Vector (2).svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "./style";
import { Navigation } from "swiper";
import { Brand } from "../Brand";

const ListBrands = () => {
  const width = window.screen.width;

  const brands = Array.from({ length: 10 }, (_, i) => (
    <SwiperSlide key={i}>
      <Brand />
    </SwiperSlide>
  ));

  return (
    <Container>
      <h2>Navegue por marcas</h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={width > 1440 ? 0 : width < 1250 ? 300 : 0}
        slidesPerView={width > 425 ? 5 : 1}
        navigation={{
          nextEl: ".btn-right-brand",
        }}
      >
        {brands}
      </Swiper>

      <div className="btn-right-brand arrowRight">
        <img src={arrowRight} alt="seta para a direita" />
      </div>
    </Container>
  );
};

export { ListBrands };
