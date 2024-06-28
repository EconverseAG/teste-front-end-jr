import { IProduct } from '../../types/IProduct';
import { calculatePriceDivided, installment, calculatePriceWithMarkup } from '../../utils/priceUtils';
import styles from './ProductCard.module.scss';
import { Button } from '../Button';

interface ProductCardProps {
  product: IProduct;
  onClick: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const installmentValue = calculatePriceDivided(product.price, installment);

  const priceWithMarkup = calculatePriceWithMarkup(product.price, 10); // Exemplo com 10% de markup

  return (
    <div className={styles.productCard} onClick={onClick}>
      <img src={product.photo} alt={product.productName} />
      <div className={styles.info}>
        <p className={styles.description}>{product.descriptionShort}</p>
        <p className={styles.oldPrice}>
          <span className={styles.oldPriceStriked}>R$ {product.price.toFixed(2)}</span>
          <br />
          <span className={styles.newPriceHighlighted}>R$ {priceWithMarkup.toFixed(2)}</span>
        </p>
        <div className={styles.installmentInfo}>
          <p>ou {installment}x de R$ {installmentValue.toFixed(2)} sem juros</p>
          <p> <strong>Frete grátis</strong></p>
        </div>
        <Button
          title="Comprar"
          variant="large"
        />
      </div>
    </div>
  );
}
