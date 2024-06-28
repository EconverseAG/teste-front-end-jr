import React from 'react';
import styles from './CategoryItem.module.scss';
import ICategory from '../../../types/ICategory';

interface CategoryItemProps {
  category: ICategory;
  isActive: boolean;
  onClick: () => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category, isActive, onClick }) => {
  return (
    <li className={`${styles.categoryItem} ${isActive ? styles.active : ''}`} onClick={onClick}>
      <img src={category.icon} alt={category.alt} className={styles.categoryIcon} />
      <span className={styles.categoryName}>{category.name}</span>
    </li>
  );
};

export default CategoryItem;