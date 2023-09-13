import styles from "./BarNav.module.scss";
import crown from "../../assets/svg/CrownSimple.svg";

export default function BarNav() {
  return (
    <nav className={styles.barNav}>
      <ul>
        <li>
          <a href="#todas-as-categorias">Todas as categorias</a>
        </li>

        <li>
          <a href="#supermercado">Supermercado</a>
        </li>

        <li>
          <a href="#livros">Livros</a>
        </li>

        <li>
          <a href="#moda">Moda</a>
        </li>

        <li>
          <a href="#lancamentos">Lançamentos</a>
        </li>

        <li className={styles.active}>
          <a href="#ofertas-do-dia">Ofertas do dia</a>
        </li>

        <li className={styles.sign}>
          <img src={crown} alt="Coroa" />
          <a href="#assinatura">Assinatura</a>
        </li>
      </ul>
    </nav>
  );
}
