import styles from './RelatedProducts.module.scss'
import RelatedCardProduct from './RelatedCardProduct'

export default function RelatedProducts() {
  return (
    <section className={styles.relatedBox}>
      <div className={styles.relatedBoxTexts}>
      <h3 className={styles.relatedTitle}>Produtos Relacionados</h3>
        <a href='#' className={styles.relatedLink}>Ver mais</a>
      </div>
      <div className={styles.container}>
        <RelatedCardProduct />
        <RelatedCardProduct />
      </div>
    </section>        
  )
}