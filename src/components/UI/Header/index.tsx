import { HeaderInfo } from "./HeaderInfo";
import { HeaderOptions } from './HeaderOptions';
import './styles.scss';

import credit from '../../../assets/icons/credit.svg';
import shield from '../../../assets/icons/shield.svg';
import truck from '../../../assets/icons/truck.svg';
import search from '../../../assets/icons/search.svg';

import crown from '../../../assets/icons/crown.svg';
import logo from '../../../assets/logo.svg';

export function Header() {
  return (
    <header>
      <nav className="header-info">
        <HeaderInfo
          imgUrl={shield}
        >
          Compra <strong>100% segura</strong>
        </HeaderInfo >
        <HeaderInfo
          imgUrl={truck}
        >
          <strong>Frete grátis</strong> acima de R$ 200
        </HeaderInfo>
        <HeaderInfo
          imgUrl={credit}
        >
          <strong>Parcele</strong> suas compras
        </HeaderInfo >
      </nav>
      <nav className="header-search">
        <div className="logo-container">
          <img src={logo} alt="" />
        </div>

        <div className="search-container">
          <input
            type="search"
            placeholder="O que você está buscando?"
          />
          <button
            title='search icon'
          >
            <img src={search} alt="" />
          </button>
        </div>

        <HeaderOptions />
      </nav>
      <nav className="header-menu">
        <a href="#">Todas as categorias</a>
        <a href="#">Supermercado</a>
        <a href="#">Livros</a>
        <a href="#">Moda</a>
        <a href="#">Lançamentos</a>
        <a href="#" className='active'>Ofertas do dia</a>
        <a href="#"><img src={crown} alt="" /> Assinatura</a>
      </nav>
    </header>
  )
}
