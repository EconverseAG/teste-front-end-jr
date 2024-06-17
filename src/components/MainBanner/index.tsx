import React from 'react';
import { Link } from 'react-router-dom';

import 'styles/components/mainBanner.sass'

const MainBanner: React.FC = () => {
    return (
        <section className='main-banner'>
            <h2>Venha conhecer nossas promoções</h2>
            <h4>50% Off nos produtos</h4>
            <Link to='/'>
                <button className='banner-button'>Ver produtos</button>
            </Link>
        </section>
    )
}

export default MainBanner;
