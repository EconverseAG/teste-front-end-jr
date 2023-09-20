import './styles.scss';
import { Banner, Category, Header, Product, SectionTitle } from '../../components/UI';
import { categories } from "../../utils/categories";
import { RelationalProducts } from '../../components/RelationalProducts';
import { CartModal } from '../../components';

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
      <div className="other-relational-products">
        <SectionTitle
          text="Produtos relacionados"
        />
        <button
          type='button'
        >
          Ver todos
        </button>

        <div className="products-container">
          <Product />
          <Product />
        </div>
      </div>
      <CartModal />
    </main>
  )
}
