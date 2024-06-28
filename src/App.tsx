import Header from './components/Header';
import Banner from './components/Banner';
import Categories from './components/Categories';
import { ProductSection } from './components/ProductSection';
import './styles/global.scss';

function App() {
  return (
    <>
      <Header />

      <main>
      <Banner />
      <Categories />
      <ProductSection />
      </main>

    </>
  );
}

export default App;