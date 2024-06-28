import React, { useState, useEffect } from 'react';
import styles from './ProductSection.module.scss';
import { ProductCard } from '../ProductCard';
import { ProductModal } from '../ProductModal';
import { IProduct } from '../../types/IProduct';

export function ProductSection() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/data/Products.json');
        const data = await response.json();
        console.log(data);
        if (data.success) {
          setProducts(data.products);
        } else {
          console.error('Error: Unsuccessful fetch');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); // O array vazio faz com que o efeito seja executado apenas uma vez ao montar o componente.

  const handleProductClick = (product: IProduct) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <section className={styles.productSection}>
      <h2>Produtos relacionados</h2>
      <nav className={styles.navbar}>
        <button className={styles.active}>Celular</button>
        <button>Acessórios</button>
        <button>Tablets</button>
        <button>Notebooks</button>
        <button>TVs</button>
        <button>Ver Todos</button>
      </nav>
      <div className={styles.carousel}>
        {products.map((product) => (
          <ProductCard
            key={product.productName}
            product={product}
            onClick={() => handleProductClick(product)}
          />
        ))}
      </div>
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </section>
  );
}
