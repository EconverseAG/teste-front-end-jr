import { RefObject, useContext } from 'react';
import { SwiperSlide } from 'swiper/react';
import './styles.scss';
import { CartContext } from '../../context/CartContext';
import { Partner, Product, ProductCard, SectionTitle } from '../UI';
import { Slider } from '../UI/Slider';

interface RelationalProductsProps {
  ref: RefObject<HTMLDivElement>;
}

export function RelationalProducts({ ref }: RelationalProductsProps) {
  const { products } = useContext(CartContext);

  return (
    <section className='relational-products-container' ref={ref}>
      <SectionTitle
        text='Produtos relacionados'
        withSeparator
      />

      <div className="categories-product">
        <button type='button' className='active'>Celular</button>
        <button type='button'>Acessórios</button>
        <button type='button'>Tablets</button>
        <button type='button'>Notebooks</button>
        <button type='button'>Tvs</button>
        <button type='button'>Ver todos</button>
      </div>

      <Slider>
        {products.map(product => (
          <SwiperSlide
            key={product.productName}
            className='swiper-slide'
          >
            <ProductCard
              title={product.productName}
              imgUrl={product.photo}
              price={product.price}
            />
          </SwiperSlide>
        ))}
      </Slider>

      <div className="partners-container">
        <Partner />
        <Partner />
      </div>
      <div className="other-relational-products">
        <SectionTitle
          text="Produtos relacionados"
          withSeparator
        />
        <button
          type='button'
        >
          Ver todos
        </button>

        <div className="products-container">
          <Product />
          <Product />
        </div>
      </div>
    </section>
  )
}
