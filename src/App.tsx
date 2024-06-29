// App.jsx
import Header from './components/Header';
import Banner from './components/Banner';
import Categories from './components/Categories';
import { ProductSection } from './components/ProductSection';
import './styles/global.scss';
import styles from './App.module.scss'; // Import styles
import Partners from './components/Partners';

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
        </main>
      </div>
    </>
  );
}

export default App;
