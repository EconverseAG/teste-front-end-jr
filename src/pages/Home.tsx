import React from 'react';

import MainBanner from 'components/MainBanner';
import Cards from 'components/Cards';
import Shelf01 from 'components/Shelf01';

const Home = () => {
    return (
      <main>
        <MainBanner />
        <Cards />
        <Shelf01 />
      </main>
    )
}

export default Home;
