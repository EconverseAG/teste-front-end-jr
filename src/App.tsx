import React, { useEffect, useState } from 'react';
import Header from './components/header.tsx';
import Banner from './components/banner';
import Categories from './components/categories';
import ProductList from './components/productList';
import Partners from './components/partners';
import Footer from './components/footer';
import Phones from './components/listPhone';
import Sepatarion from './components/separation';
import Sepatarion2 from './components/separation2';
import Marcas from './components/marcas';
import '../src/App.scss';
import './styles/styles.scss';
import '../src/Product.js';



const App: React.FC = () => {

  return (

    <div>
      <Header />
      <Banner />
      <Categories />
      <Sepatarion2 />
      <Phones />
      <Partners />
      <Sepatarion />
      <Phones />
      <ProductList />
      <Marcas />
      <Sepatarion />
      <Phones />
      <Footer />
    </div>

  );
}

export default App;
