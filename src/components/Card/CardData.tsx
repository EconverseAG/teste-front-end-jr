import styles from "./CardData.module.scss";
import img from "../../assets/img/celular.png";
import { Button } from "../Button/Button";

// interface CardDataProps {}

export default function CardData() {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={img} alt="" />
      </div>

      <div className={styles.info}>
        <p className={styles.title}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className={styles.price}>R$ 30,90</p>
        <p className={styles.discountPrice}>R$ 28,90</p>
        <p className={styles.installment}>ou 2x de R$ 49,95 sem juros</p>
        <p className={styles.delivery}>Frete grátis</p>
        <Button showButton={true} textButton="Comprar" />
      </div>
    </div>
  );
}
