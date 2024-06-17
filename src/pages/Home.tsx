import React from 'react';

import MainBanner from 'components/MainBanner';
import Cards from 'components/Cards';
import Shelf01 from 'components/Shelf01';
import Partners from 'components/Partners';
import Products from 'components/Products';
import Brands from 'components/Brands';

const Home = () => {
    return (
      <main>
        <MainBanner />
        <Cards />
        <Shelf01 />
        <Partners />
        <Products />
        <Brands />
      </main>
    )
}

export default Home;
