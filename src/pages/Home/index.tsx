import './styles.scss';
import { Banner, Category, Footer, Header } from '../../components/UI';
import { categories } from "../../utils/categories";
import { BrandsSection, CartModal, RelationalProducts } from '../../components';

export function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <div className="category-list">
        {categories.map(category => (
          <Category
            key={category.name}
            name={category.name}
            path={category.path}
            isActive={category.isActive}
          />
        ))}
      </div>
      <RelationalProducts />
      <BrandsSection />
      <Footer />
      <CartModal />
    </main>
  )
}
