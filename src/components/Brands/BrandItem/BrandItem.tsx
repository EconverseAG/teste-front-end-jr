import React from 'react';
import styles from './BrandItem.module.scss';

interface BrandItemProps {
  brand: { logo: string; name: string };
  active: boolean;
}

const BrandItem: React.FC<BrandItemProps> = ({ brand }) => {
  return (
    <div className={styles.brandItem}>
      <img src="/icons/circle.svg" alt="Circle" className={styles.circle} />
      <img src={brand.logo} alt={brand.name} className={styles.brandLogo} />
    </div>
  );
};

export default BrandItem;
