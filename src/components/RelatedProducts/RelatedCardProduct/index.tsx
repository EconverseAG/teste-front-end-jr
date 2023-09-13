import styles from "./RelatedCardProduct.module.scss";

export default function CardProduct() {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <h3 className={styles.titleCard}>Produtos</h3>
        <p className={styles.cardText}>
          Lorem ipsum dolor sit amet, consectetur
        </p>
        <button className={styles.cardButton}>Confira</button>
      </div>
    </div>
  );
}
