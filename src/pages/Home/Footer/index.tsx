import AboutFooterList from "../../../components/AboutFooterList";
import CardFooter from "../../../components/CardFooter";
import InfoFooterList from "../../../components/InfoFooterList";
import PaymentsMethodsFooterList from "../../../components/PaymentsMethodsFooterList";
import styles from "./Footer.module.scss";
import brand from '../../../assets/brand.svg'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.boxFooter}>
        <div className={styles.container}>
          <AboutFooterList />
          <InfoFooterList />
          <PaymentsMethodsFooterList />
        </div>

        <CardFooter />
      </div>

      <div className={styles.copyrigth}>
        <p className={styles.copyrigthText}>
          Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas
          imagens são de propriedade de seus respectivos donos. É vedada a
          reprodução, total ou parcial, de qualquer conteúdo sem expressa
          autorização.
        </p>
        <img src={brand} alt="Logotipo da marca" className={styles.brand} />
      </div>
    </footer>
  );
}
