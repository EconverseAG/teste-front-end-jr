import React, { useState } from 'react';
import styles from './Categories.module.scss';
import categories from './data';
import CategoryItem from './CategoryItem';

function Categories() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <section className={styles.categories}>
      <div className="container-center">
        <ul className={styles.categoryList}>
          {categories.map((category, index) => (
            <CategoryItem
              key={index}
              category={category}
              isActive={activeCategory === index}
              onClick={() => setActiveCategory(index)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Categories;
