import './styles.scss';
import { Banner } from "../../components/UI/Banner";
import { Category } from "../../components/UI/Category";
import { Header } from "../../components/UI/Header";
import { categories } from "../../utils/categories";
import { RelationalProducts } from '../../components/RelationalProducts';
import { CartModal } from '../../components/CartModal';

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
      <CartModal />
    </main>
  )
}
