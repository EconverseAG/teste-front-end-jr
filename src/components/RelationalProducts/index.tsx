import { useContext } from 'react';
import './styles.scss';
import { ProductCard } from '../UI/ProductCard';
import { CartContext } from '../../context/CartContext';

export function RelationalProducts() {
  const { products } = useContext(CartContext);

  return (
    <section className='relational-products-container'>
      <h1>Produtos relacionados</h1>

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

    </section>
  )
}
