import styles from './ProductRelated.module.scss';
import { Button } from '../Button';

function RelatedProductsSection() {
  return (
    <section className={styles.relatedProducts}>
      <div className="container-center">
        <h2 className={styles.sectionTitle}>Produtos relacionados</h2>
        <div className={styles.productsContainer}>
          <div className={styles.productItem}>
            <div className={styles.textContainer}>
              <h4 className={styles.productTitle}>Produto 1</h4>
              <p className={styles.productDescription}>
                Descrição curta do produto 1
              </p>
              <Button title="Comprar" variant="small" />
            </div>
          </div>
          <div className={styles.productItem}>
            <div className={styles.textContainer}>
              <h4 className={styles.productTitle}>Produto 2</h4>
              <p className={styles.productDescription}>
                Descrição curta do produto 2
              </p>
              <Button title="Comprar" variant="small" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RelatedProductsSection;
