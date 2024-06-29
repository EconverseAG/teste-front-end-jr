import styles from './Partners.module.scss';
import { Button } from '../Button';

function Partners() {
  return (
    <div className={styles.partnersContainer}>
      <div className={styles.partnerItem}>
        <div className={styles.textContainer}>
          <h4 className={styles.partnerTitle}>Parceiros</h4>
          <p className={styles.partnerDescription}>
            Lorem ipsum dolor sit amet, consectetur
          </p>
          <Button title="CONFIRA" variant="small" />
        </div>
      </div>
      <div className={styles.partnerItem}>
        <div className={styles.textContainer}>
          <h4 className={styles.partnerTitle}>Parceiros</h4>
          <p className={styles.partnerDescription}>
            Lorem ipsum dolor sit amet, consectetur
          </p>
          <Button title="CONFIRA" variant="small" />
        </div>
      </div>
    </div>
  );
}

export default Partners;
