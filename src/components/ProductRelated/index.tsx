import styles from './ProductRelated.module.scss';
import { Button } from '../Button';

function RelatedProductsSection() {
  return (
    <section className={styles.relatedProducts}>
      <div className={styles.related}>
      <h2 className={styles.sectionTitle}>Produtos relacionados</h2>
      <a href="#">Ver todos</a>
      </div>
        <div className={styles.productsContainer}>
          <div className={styles.productItem}>
            <div className={styles.textContainer}>
              <h4 className={styles.productTitle}>Produtos</h4>
              <p className={styles.productDescription}>
              Lorem ipsum dolor sit amet, consectetur
              </p>
              <Button title="Confira" variant="small" />
            </div>
          </div>
          <div className={styles.productItem}>
            <div className={styles.textContainer}>
              <h4 className={styles.productTitle}>Produtos</h4>
              <p className={styles.productDescription}>
              Lorem ipsum dolor sit amet, consectetur
              </p>
              <Button title="Confira" variant="small" />
            </div>
          </div>
        </div>
    </section>
  );
}

export default RelatedProductsSection;
