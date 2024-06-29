// App.jsx
import Header from './components/Header';
import Banner from './components/Banner';
import Categories from './components/Categories';
import { ProductSection } from './components/ProductSection';
import styles from './App.module.scss'; // Import styles
import Partners from './components/Partners';
import ProductRelated from './components/ProductRelated';
import Brands from './components/Brands';

import './styles/global.scss';


function App() {
  return (
    <>
      <div className={styles.container}>
        <Header />
      </div>
      <Banner />
      <div className={styles.container}>
        <main>
          <Categories />
          <ProductSection />
          <Partners />
          <ProductRelated />
          <Brands />
        </main>
      </div>
    </>
  );
}

export default App;
