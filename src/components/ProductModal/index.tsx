// src/components/ProductModal/index.tsx
import React from 'react';
import styles from './ProductModal.module.scss';
import { IProduct } from '../../types/IProduct';

interface ProductModalProps {
  product: IProduct;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  return (
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <img src={product.photo} alt={product.productName} />
        <div className={styles.info}>
          <h2>{product.productName}</h2>
          <p className={styles.price}>R$ {product.price}</p>
          <p>{product.descriptionShort}</p>
        </div>
      </div>
    </div>
  );
}
