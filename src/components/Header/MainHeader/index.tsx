import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import ItemsProfile from './ItemsProfile';

import logo from 'images/Header/Logo.png';
import magnifyingGlass from 'images/Header/MagnifyingGlass.png'
import purchase from 'images/Header/Purchase.png'
import heart from 'images/Header/Heart.png'
import profile from 'images/Header/Profile.png'
import shoppingCart from 'images/Header/ShoppingCart.png'

const MainHeader: React.FC = () => {

    const [search, setSearch] = useState<string>('');

    const handleKeyPress = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            searchProduct(search);
        }
    }

    const searchProduct = (search: string) => {
        // Função pesquisar
        alert(`Pesquisar: ${search}`)
    }

    return (
        <div className='main-header'>
            <div className='logo'>
                <Link to='/'>
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className='header-search'>
                <input
                    type='text'
                    placeholder='O que você está buscando?'
                    className='search'
                    onChange={e => setSearch(e.target.value)}
                    onKeyDown={handleKeyPress}
                />
                <img src={magnifyingGlass} alt='Lupa de procurar' className='icon-search' onClick={() => searchProduct(search)} />
            </div>
            <div className='icons-profile'>
                <ItemsProfile
                    link='/'
                    image={purchase}
                    alt='Compras'
                />
                <ItemsProfile
                    link='/'
                    image={heart}
                    alt='Coração'
                />
                <ItemsProfile
                    link='/'
                    image={profile}
                    alt='Perfil'
                />
                <ItemsProfile
                    link='/'
                    image={shoppingCart}
                    alt='Carrinho de compra'
                />
            </div>
        </div>
    )
}

export default MainHeader;
