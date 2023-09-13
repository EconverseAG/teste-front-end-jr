import styles from './CardPartner.module.scss'

export default function CardPartner() {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <h3 className={styles.titleCard}>Parceiros</h3>
        <p className={styles.cardText}>Lorem ipsum dolor sit amet, consectetur</p>
        <button className={styles.cardButton}>Confira</button>
      </div>
    </div>
  )
}