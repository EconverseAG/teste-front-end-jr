import { useEffect, useState } from "react";
import CarouselCard from "./CarouselCard";
import styles from "./Carousel.module.scss";

import { Navigation, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import productsData from "../../utils/products.json";
import IProduct from "../../types/IProduct";

export default function Carousel() {
  const [products, setProducts] = useState<IProduct[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mockData = await productsData;
        await new Promise((resolve) => setTimeout(resolve, 500));
        setProducts(mockData.products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <article className={styles.container}>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={30}
        slidesPerView={4}
        navigation
        className={styles.swiperBox}
      >
        {products?.map((product) => (
          <SwiperSlide>
            <CarouselCard product={product}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
}
