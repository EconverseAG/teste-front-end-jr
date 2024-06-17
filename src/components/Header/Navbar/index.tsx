import React from 'react';

import ItemsNavbar from './ItemsNavbar';

import crown from 'images/Header/CrownSimple.png'

const Navbar: React.FC = () => {
    return (  
        <nav className='navbar'>
            <ul>
                <ItemsNavbar link="/">Todas as Categorias</ItemsNavbar>
                <ItemsNavbar link="/">Supermercado</ItemsNavbar>
                <ItemsNavbar link="/">Livros</ItemsNavbar>
                <ItemsNavbar link="/">Moda</ItemsNavbar>
                <ItemsNavbar link="/">Lançamentos</ItemsNavbar>
                <ItemsNavbar link="/">Ofertas do dia</ItemsNavbar>
                <ItemsNavbar link="/"><img src={crown} alt='Coroa' />Assinatura</ItemsNavbar>
            </ul>
        </nav>
    )
}

export default Navbar;
