import styles from './ProductModal.module.scss';
import { IProduct } from '../../types/IProduct';
import { Button } from '../Button';
import { Counter } from '../Counter';

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
        <div className={styles.imageContainer}>
          <img src={product.photo} alt={product.productName} />
        </div>
        <div className={styles.info}>
          <h3>{product.productName}</h3>
          <p className={styles.price}>R$ {product.price.toFixed(2)}</p>
          <p className={styles.description}>{product.descriptionShort}</p>
          <a href="#" className={styles.detailsLink}>Veja mais detalhes do produto {'>'}</a>
          <Counter />
          <Button title="Comprar" variant="large" />
        </div>
      </div>
    </div>
  );
}
