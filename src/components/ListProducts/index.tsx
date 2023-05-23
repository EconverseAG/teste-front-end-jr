import { ProductContext } from "../../contexts/ProductContext";
import arrowRight from "../../assets/Vector (1).svg";
import { Swiper, SwiperSlide } from "swiper/react";
import arrowLeft from "../../assets/Vector.svg";
import { Product } from "../Product";
import { Container } from "./style";
import { Navigation } from "swiper";
import { useContext } from "react";

const ListProducts = () => {
  const width = window.screen.width;

  const { products } = useContext(ProductContext);

  return (
    <Container>
      <img className="btn-left" src={arrowLeft} alt="seta para esquerda" />
      <Swiper
        modules={[Navigation]}
        spaceBetween={width > 1440 ? 62 : width < 1250 ? 300 : 62}
        slidesPerView={width > 425 ? 4 : 1}
        navigation={{
          prevEl: ".btn-left",
          nextEl: ".btn-right",
        }}
      >
        {products.map((product, i) => (
          <SwiperSlide key={i}>
            <Product product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <img className="btn-right" src={arrowRight} alt="seta para direita" />
    </Container>
  );
};

export { ListProducts };
