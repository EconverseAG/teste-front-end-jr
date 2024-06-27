import styles from './Banner.module.scss';

function Banner() {
  return (
    <section className={styles.banner}>
      <div className="banner-content">
        <h1>Venha conhecer nossas promoções</h1>
        <h2>50% Off nos produtos</h2>
        <button>Ver produtos</button>
      </div>
    </section>
  );
}

export default Banner;
