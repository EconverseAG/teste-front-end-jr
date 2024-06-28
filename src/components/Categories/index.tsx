import React, { useState } from 'react';
import styles from './Categories.module.scss';
import categories from './data';
import CategoryItem from './CategoryItem';

const Categories: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
    return (
      <section className={styles.container}>
        <nav role="navigation">
          <ul className={styles.list}>
            {categories.map((category) => (
              <CategoryItem
                key={category.name}
                category={category}
                isActive={activeCategory === category.name}
                onClick={() => setActiveCategory(category.name)}
              />
            ))}
          </ul>
        </nav>
      </section>
    );
  };
  
  export default Categories;