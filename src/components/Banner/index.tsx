import styles from './Banner.module.scss';
import { Button } from '../Button';
function Banner() {
  return (
    <section className={styles.banner}>
      <div className="banner-content">
        <h1>Venha conhecer nossas promoções</h1>
        <h2>50% Off nos produtos</h2>
        <Button
          title="Ver produto"
          variant="medium"
        />
      </div>
    </section>
  );
}

export default Banner;
