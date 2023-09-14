import styles from './CardFooter.module.scss'

export default function CardFooter() {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>Cadastre-se e Receba nossas <span className={styles.cardTitleWeigth}> novidades e promoções</span></h3>
      <p className={styles.cardText}>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>

      <form className={styles.container}>
        <input type="email" className={styles.cardInput} placeholder="Seu email" />
        <button className={styles.cardButton}>Ok</button>
      </form>
    </div>
  )
}