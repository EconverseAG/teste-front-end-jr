import CardData from "./CardData";
import styles from "./Card.module.scss";

export default function Card() {
  return (
    <div className={styles.card}>
      <CardData />
      <CardData />
      <CardData />
      <CardData />
    </div>
  );
}
