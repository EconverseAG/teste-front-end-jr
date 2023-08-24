import './header.scss';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeartOutlined, UserOutlined, ShoppingCartOutlined, CodeSandboxOutlined, CrownOutlined } from '@ant-design/icons';

function Header({ onSearch }) {
    const [searchItem, setSearchItem] = useState('');

    const handleSearch = (event) => {
        setSearchItem(event.target.value);
    };


    return (
        <header className="header-container">
            <div className="text-header">
                <p>Compra <strong className='strong-text-header'>100% seguro</strong></p>
                <p><strong className='strong-text-header'>Frete grátis</strong> acima de R$ 200</p>
                <p><strong className='strong-text-header'>Parcele</strong> suas compras</p>
            </div>
            <hr />
            <div className="header-content">
                <h1 className="h1-title">vtex</h1>
                <input
                    type="text"
                    value={searchItem}
                    onChange={handleSearch}
                    placeholder="O que esta buscando?"
                    className='search-header'
                />
                <div className='div-icons-header'>
                    <a href='#' className='icon-link'><CodeSandboxOutlined /></a>
                    <a href='#' className='icon-link'><HeartOutlined /></a>
                    <a href='#' className='icon-link'><UserOutlined /></a>
                    <a href='#' className='icon-link'><ShoppingCartOutlined /></a>
                </div>
            </div>
            <hr />
            <div className="div-menu-list">
                <Link className='link-menu-list'>Lista de Categorias</Link>
                <Link className='link-menu-list'>Supermercado</Link>
                <Link className='link-menu-list'>Livros</Link>
                <Link className='link-menu-list'>Moda</Link>
                <Link className='link-menu-list'>Lançamentos</Link>
                <Link className='link-menu-list'>Ofertas do Dia</Link>
                <Link className='link-menu-list'><CrownOutlined className='crown' />Assinatura</Link>
            </div>
        </header>
    );
}

export default Header;