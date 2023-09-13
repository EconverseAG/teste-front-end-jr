import styles from './Banner.module.scss'

export default function Banner() {
  return (
    <section className={`${styles.banner}`}>
      <div className={`${styles.container}`}>
        <h2 className={`${styles.bannerTitle}`}>Venha conhecer nossas promoções</h2>
        <h3 className={`${styles.bannerSubtitle}`}>50% Off nos produtos</h3>
        <button className={`${styles.bannerButton}`}>Ver produto</button>
      </div>
    </section>
  )
}