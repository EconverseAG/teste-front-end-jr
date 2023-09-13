import BrandItem from "./BrandItem";

import styles from "./BrandsNavigator.module.scss";

import nextButton from '../../assets/next.svg'

export default function BrowseByBrands() {
  return (
    <nav className={styles.brandsNavigator}>
      <h3 className={styles.brandNavigatorTitle}>Navegue por marcas</h3>
      <div className={styles.container}>
        <BrandItem />
        <BrandItem />
        <BrandItem />
        <BrandItem />
        <BrandItem />
        <button className={styles.brandButtonNext}>
          <img src={nextButton} alt="Botão para avançar" />
        </button>
      </div>
    </nav>
  );
}
