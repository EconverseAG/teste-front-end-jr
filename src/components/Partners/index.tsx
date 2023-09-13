import CardPartner from "./CardPartner";
import styles from './Partners.module.scss'

export default function Partners() {
  return (
    <article className={styles.partnersBox}>
      <CardPartner />
      <CardPartner />
    </article>
  )
}