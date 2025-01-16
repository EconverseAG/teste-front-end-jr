import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductModal from './productModal'; // Importe o componente Modal
import '../styles/styles.scss';
import imgNext from '../imgs/categorias/buttonNext.png';
import imgBefore from '../imgs/categorias/buttonBefore.png';

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}


// interface InfiniteCarouselProps {
//   products: Product[];
// }

const ListPhone: React.FC = ({ }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const itemsPerSlide = 4;

  useEffect(() => {
    axios.get('../produtos.json')
      .then(response => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch(() => {
        setError('Erro ao buscar produtos');
        setLoading(false);
      });
  }, []);

  const nextSlide = () => {
    if (currentIndex >= products.length - itemsPerSlide) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(products.length - itemsPerSlide);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleBuyClick = (product: Product) => {
    setSelectedProduct(product); // Define o produto selecionado
  };

  const closeModal = () => {
    setSelectedProduct(null); // Fecha o modal
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="phone">
      <button className="carousel__button prev" onClick={prevSlide} disabled={currentIndex === 0}>
        <img src={imgBefore} alt="" />
      </button>
      <div className="carousel__track-container">
        <div
          className="carousel__track"
          style={{
            transform: `translateX(-${10 * currentIndex}%)`,
          }}
        >
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.photo} alt={product.productName} className="partner-image" />
              <div className="product-info">
                <h2 className="product-title">{product.descriptionShort}</h2>
                <div className="product-pricing">
                  <p className='original-price'>R$ {(product.price + (0.05 * product.price)).toFixed(2)}</p>
                  <p className="current-price">R$ {product.price.toFixed(2)}</p>
                  <p className="installments">ou 2x de R$ {(product.price / 2).toFixed(2)} sem juros</p>
                </div>
                <p className="free-shipping">Frete grátis</p>
              </div>
              <button className="buy-button" onClick={() => handleBuyClick(product)}>COMPRAR</button>
            </div>
          ))}
        </div>
      </div>
      <button className="carousel__button next" onClick={nextSlide} disabled={currentIndex >= products.length - 1}>
        <img src={imgNext} alt="" />
      </button>

      {/* Renderiza o modal se um produto for selecionado */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </section>
  );
};

export default ListPhone;
