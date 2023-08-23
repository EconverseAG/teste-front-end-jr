import React from "react";
import { Link } from "react-router-dom";
//import './header.scss';

function Header() {
    return (
        <header className="header-container">
            <div className="d-flex justify-content-around">
                <p>Compra 100% seguro</p>
                <p><strong>Frete grátis</strong> acima de R$ 200</p>
                <p><strong>Parcele</strong> suas compras</p>
            </div>
            <div className="d-flex justify-content-around">
                <h1 className="">vtex</h1>
                <input type="text" />
                <div>
                    <button>Produtos</button>
                    <button>Favoritos</button>
                    <button>Perfil</button>
                    <button>Carrinho</button>
                </div>
            </div>
            <div className="d-flex justify-content-around">
                <Link>Lista de Categorias</Link>
                <Link>Supermercado</Link>
                <Link>Livros</Link>
                <Link>Moda</Link>
                <Link>Lançamentos</Link>
                <Link>Ofertas do Dia</Link>
                <Link>Assinatura</Link>
            </div>
        </header>
    );
}

export default Header;