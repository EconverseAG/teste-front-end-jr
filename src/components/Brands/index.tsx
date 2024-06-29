import { useState } from 'react';
import styles from './Brands.module.scss';
import BrandItem from './BrandItem/BrandItem';
import brands from '../../../public/data/brands.json';

function Brands() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxVisibleItems = 5; 
  const nextBrand = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, brands.length - maxVisibleItems));
  };

  return (
    <section className={styles.brandsSection}>
      <div className="container">
        <h2 className={styles.title}>Navegue por marcas</h2>
        <div className={styles.carousel}>
          <div className={styles.carouselItems}>
            {brands.slice(currentIndex, currentIndex + maxVisibleItems).map((brand, index) => (
              <BrandItem key={brand.id} brand={brand} active={index === currentIndex} />
            ))}
          </div>
          <button className={`${styles.navButton} ${styles.nextButton}`} onClick={nextBrand}>
            <img src="/icons/next.svg" alt="Próximo" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Brands;
