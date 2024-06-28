// src/components/ProductCard/index.tsx
import React from 'react';
import styles from './ProductCard.module.scss';
import { IProduct } from '../../types/IProduct';

interface ProductCardProps {
  product: IProduct;
  onClick: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div className={styles.productCard} onClick={onClick}>
      <img src={product.photo} alt={product.productName} />
      <div className={styles.info}>
        <p>{product.productName}</p>
        <p className={styles.price}>R$ {product.price}</p>
        <button>Comprar</button>
      </div>
    </div>
  );
}
