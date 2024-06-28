import Header from './components/Header';
import Banner from './components/Banner';
import Categories from './components/Categories';
import './styles/global.scss';

function App() {
  return (
    <>
      <Header />

      <main>
      <Banner />
      <Categories />
      </main>

    </>
  );
}

export default App;