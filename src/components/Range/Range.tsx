import styles from "./Range.module.scss";
import RangeText from "./RangeData";
import img1 from "../../assets/svg/ShieldCheck.svg";
import img2 from "../../assets/svg/Truck.svg";
import img3 from "../../assets/svg/CreditCard.svg";

export default function Range() {
  return (
    <div className={styles.range}>
      <RangeText img={img1} alt="Escudo" text="Compra" emphasis="100% segura" />
      <RangeText
        img={img2}
        alt="Caminhão"
        text="acima de R$ 200"
        emphasis="Frete grátis"
        direction="row-reverse"
      />
      <RangeText
        img={img3}
        alt="Cartão de crédito"
        text="suas compras"
        emphasis="Parcele"
        direction="row-reverse"
      />
    </div>
  );
}
