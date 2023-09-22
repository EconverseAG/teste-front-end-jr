import { useEffect, useRef } from 'react';
import scrollreveal from 'scrollreveal';
import { Banner, Category, Footer, Header } from '../../components/UI';
import { BrandsSection, CartModal, RelationalProducts } from '../../components';
import './styles.scss';
import { categories } from "../../utils/categories";

export function Home() {
  const categoryListRef = useRef<HTMLDivElement>(null);
  const relationalProductsRef = useRef<HTMLDivElement>(null);
  const brandsSectionRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollreveal().reveal(
      `${categoryListRef.current}, ${relationalProductsRef.current}, ${brandsSectionRef.current}, ${footerRef.current}`,
      {
        delay: 500,
      }
    )
  }, [])

  return (
    <main>
      <Header />
      <Banner />
      <div className="category-list" ref={categoryListRef}>
        {categories.map(category => (
          <Category
            key={category.name}
            name={category.name}
            path={category.path}
            isActive={category.isActive}
          />
        ))}
      </div>
      <RelationalProducts ref={relationalProductsRef} />
      <BrandsSection ref={brandsSectionRef} />
      <Footer ref={footerRef} />
      <CartModal />
    </main>
  )
}
