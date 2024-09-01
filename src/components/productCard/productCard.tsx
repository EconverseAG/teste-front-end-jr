import React from 'react';
import './product-card.scss';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: string;
    image: string;
  };
  onClick: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <article className="product-card" onClick={() => onClick(product.id)}>
      <img src={product.image} alt={`Imagem do ${product.name}`} />
      <h3 className="product-name">{product.name}</h3>
      <p className="price">R$ {product.price}</p>
      <button className="buy-button">Comprar</button>
    </article>
  );
};

export default ProductCard;