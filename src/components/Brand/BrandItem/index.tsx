import styles from "./BrandItem.module.scss";

import logo from '../../../assets/logo.svg'

export default function BrandItem() {
  return (
    <div className={styles.brandItem}>
      <img src={logo} alt="Logo VTex" className={styles.brandLogo} />
    </div>
  );
}
