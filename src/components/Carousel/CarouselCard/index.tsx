import styles from './CarouselCard.module.scss'

import iphone from '../../../assets/iphone.png'

export default function CardCarousel() {
  return (
    <div className={styles.card}>
      <img src={iphone} alt="Imagem de um Iphone" className={styles.cardImage} />
      <h3 className={styles.cardName}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
      <div className={styles.prices}>
        <p className={styles.salePrice}>R$ 30,90</p>
        <p className={styles.fullPrice}><strong>R$28,90</strong></p>
      </div>
      <p className={styles.cardPortion}>ou 2x de R$ 49,95 sem juros</p>
      <p className={styles.cardFreight}>Frete grátis</p>
      <button className={styles.cardButton}>
        Comprar
      </button>

    </div>
  )
}
