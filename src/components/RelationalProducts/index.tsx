import { useContext } from 'react';
import './styles.scss';
import { CartContext } from '../../context/CartContext';
import { Partner, ProductCard, SectionTitle } from '../UI';

export function RelationalProducts() {
  const { products } = useContext(CartContext);

  return (
    <section className='relational-products-container'>
      <SectionTitle
        text='Produtos relacionados'
      />

      <div className="categories-product">
        <button type='button' className='active'>Celular</button>
        <button type='button'>Acessórios</button>
        <button type='button'>Tablets</button>
        <button type='button'>Notebooks</button>
        <button type='button'>Tvs</button>
        <button type='button'>Ver todos</button>
      </div>

      <div className="cards">
        {products.map(product => (
          <ProductCard
            key={product.productName}
            title={product.productName}
            imgUrl={product.photo}
            price={product.price}
          />
        ))}
      </div>
      <div className="partners-container">
        <Partner />
        <Partner />
      </div>
    </section>
  )
}
