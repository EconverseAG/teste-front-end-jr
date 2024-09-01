import iconeFavorit from '../imgs/header/Heart.png';
import iconeUser from '../imgs/header/UserCircle.png';
import iconeVector from '../imgs/header/Vector.png';
import iconeVerfi from '../imgs/header/ShieldCheck.png';
import iconeFrete from '../imgs/header/Truck.png';
import iconeParcela from '../imgs/header/CreditCard.png';
import iconeLupa from '../imgs/header/MagnifyingGlass.png';
import iconeCarrinho from '../imgs/header/ShoppingCart.png';
import logo from "../imgs/logo-vtex/logo-vtex.png";
import coroa from '../imgs/header/CrownSimple.png';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a href="#" className="header__nav-link">
              <img src={iconeVerfi} alt="Compra 100% segura" />
              <p>Compra <b>100% segura</b></p>
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#" className="header__nav-link">
              <img src={iconeFrete} alt="Frete grátis acima de R$ 200" />
              <p><b>Frete grátis</b> acima de R$ 200</p>
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#" className="header__nav-link">
              <img src={iconeParcela} alt="Parcele suas compras" />
              <p><b>Parcele</b> suas compras</p>
            </a>
          </li>
        </ul>
      </nav>

      <div className="header__search">
        <div className="header__logo">
          <img src={logo} alt="VTEX Logo" />
        </div>
        <div className="search">
          <input
            type="search"
            className="header__search-input"
            placeholder="O que você está buscando?"
            aria-label="Pesquisar"
          />
          <button className="header__search-button" aria-label="Buscar">
            <img src={iconeLupa} alt="Buscar" />
          </button>
        </div>
        <div className="header__icons">
          <a href="#" aria-label="Pedidos" className="header__icon-link">
            <img src={iconeCarrinho} alt="Pedidos" />
          </a>
          <a href="#" aria-label="Favoritos" className="header__icon-link">
            <img src={iconeFavorit} alt="Favoritos" />
          </a>
          <a href="#" aria-label="Perfil" className="header__icon-link">
            <img src={iconeUser} alt="Perfil" />
          </a>
          <a href="#" aria-label="Carrinho" className="header__icon-link">
            <img src={iconeVector} alt="Carrinho" />
          </a>
        </div>
      </div>
      <div className="header__bottom">
        <nav className="header__menu">
          <ul className="header__menu-list">
            <li>
              <a href="#" className="header__menu-item">
                Todas Categorias
              </a>
            </li>
            <li>
              <a href="#" className="header__menu-item">
                Supermercado
              </a>
            </li>
            <li>
              <a href="#" className="header__menu-item">
                Livros
              </a>
            </li>
            <li>
              <a href="#" className="header__menu-item">
                Moda
              </a>
            </li>
            <li>
              <a href="#" className="header__menu-item">
                Lançamentos
              </a>
            </li>
            <li>
              <a href="#" className="header__menu-item">
                <b>Ofertas do Dia</b>
              </a>
            </li>
            <li>
              <a href="#" className="header__menu-item">
                <img src={coroa} alt="Parcele suas compras" />
                Assinatura
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

  );
};
export default Header;