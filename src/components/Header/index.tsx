import React from 'react';
import 'styles/components/header.sass'

import ItemsTopBar from './ItemsTopBar';
import MainHeader from './MainHeader';
import Navbar from './Navbar';

import shield from 'images/Header/ShieldCheck.png'
import truck from 'images/Header/Truck.png'
import card from 'images/Header/CreditCard.png'

const Header: React.FC = () => {
    return (
        <header className='header'>
            <div className='top-bar'>
                <ItemsTopBar
                    image={shield}
                    alt="Shield"
                >
                    Compra <span>100% segura</span>
                </ItemsTopBar>
                <ItemsTopBar
                    image={truck}
                    alt="Truck"
                >
                    <span>Frete grátis</span> acima de R$ 200
                </ItemsTopBar>
                <ItemsTopBar
                    image={card}
                    alt="Card"
                >
                    <span>Parcele</span> suas compras
                </ItemsTopBar>
            </div>
            <MainHeader />
            <Navbar />
        </header>
    )
}

export default Header;
