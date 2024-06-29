import { useState, useEffect } from 'react';
import styles from './ProductSection.module.scss';
import { ProductCard } from '../ProductCard';
import { ProductModal } from '../ProductModal';
import { IProduct } from '../../types/IProduct';

export function ProductSection() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeButton, setActiveButton] = useState('Celular'); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/data/products.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
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
  }, []);

  const handleProductClick = (product: IProduct) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? products.length - 1 : prevIndex - 1;
      return newIndex;
    });
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === products.length - 1 ? 0 : prevIndex + 1;
      return newIndex;
    });
  };

  // Determina os produtos a serem exibidos no carousel (sempre 4 itens)
  const displayedProducts = products.length >= 4
    ? [
        products[(currentIndex) % products.length],
        products[(currentIndex + 1) % products.length],
        products[(currentIndex + 2) % products.length],
        products[(currentIndex + 3) % products.length],
      ]
    : [];


  const handleButtonClick = (label: string) => {
    setActiveButton(label);
  };
  

  return (
    <section className={styles.productSection}>
      <h2>Produtos relacionados</h2>
      <nav className={styles.navbar}>
        {['Celular', 'Acessórios', 'Tablets', 'Notebooks', 'TVs', 'Ver Todos'].map((label) => (
          <button
            key={label}
            className={activeButton === label ? styles.active : ''}
            onClick={() => handleButtonClick(label)}
          >
            {label}
          </button>
        ))}
      </nav>
      <div className={styles.carousel}>
        <button
          className={styles.carouselButton}
          onClick={goToPrevious}
          disabled={products.length <= 4} // Desativa o botão se houver menos de 4 produtos
        >
          <img src="/icons/vectorleft.svg" alt="Seta para a esquerda" />
        </button>
        {displayedProducts.map((product) => (
          <ProductCard
            key={product.productName}
            product={product}
            onClick={() => handleProductClick(product)}
          />
        ))}
        <button
          className={styles.carouselButton}
          onClick={goToNext}
          disabled={products.length <= 4} // Desativa o botão se houver menos de 4 produtos
        >
          <img src="/icons/vectorright.svg" alt="Seta para a direita" />
        </button>
      </div>
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </section>
  );
}
