import React from 'react';
import 'styles/components/products.sass'

import backgroundBanner from 'images/ContainerProducts/Background-banner.png';
import Product from './Product';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
    return (
        <section className='container-products'>
            <div className='title-container'> <hr /> <h3>Produtos Relacionados</h3></div>
            <Link to='/'>
                <p className='see-all'>Ver todos</p>
            </Link>
            <div className='products'>
                <Product
                    link='/'
                    image={backgroundBanner}
                    title='Produtos'
                >
                    Lorem ipsum dolor sit amet, consectetur
                </Product>
                <Product
                    link='/'
                    image={backgroundBanner}
                >
                    Lorem ipsum dolor sit amet, consectetur
                </Product>
            </div>
        </section>
    )
}

export default Products;
