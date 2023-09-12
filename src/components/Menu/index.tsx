
import styles from './Menu.module.scss'

import Logo from '../../assets/logo.svg'
import Group from '../../assets/group.svg'
import Heart from '../../assets/heart.svg'
import ShoppingCart from '../../assets/shoppingCart.svg'
import User from '../../assets/user.svg'
import Truck from '../../assets/truck.svg'
import Search from '../../assets/search.svg'
import CreditCard from '../../assets/creditCard.svg'
import Shield from '../../assets/shieldCheck.svg'
import Crown from '../../assets/crownSimple.svg'

export default function Menu() {
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.container}`}>
      <ul className={`${styles.headerInfoList}`}>
          <li className={`${styles.font} ${styles.colorGray} ${styles.boxInfoAndIcon}`}>
            <img src={Shield} alt="compra 100% segura" />
            Compra <span className={`${styles.pinkFont}`}>100% segura</span>
          </li>
          <li className={`${styles.font} ${styles.colorGray} ${styles.boxInfoAndIcon}`}>
            <img src={Truck} alt="frete grátis" />
            <span className={`${styles.pinkFont}`}>Frete grátis</span>  acima de R$ 200
          </li>
          <li className={`${styles.font} ${styles.colorGray} ${styles.boxInfoAndIcon}`}>
            <img src={CreditCard} alt="parcele suas compras" />
            <span className={`${styles.pinkFont}`}>Parcele</span> suas compras
          </li> 
        </ul>
        <nav>
          <div className={`${styles.headerAndListOptions}`}>
            <h1>
              <img src={Logo} alt="Logo VTEX" />
            </h1>
            <div className={`${styles.searchInput}`}>
              <input type="search" placeholder='O que você está buscando?' />
              <img src={Search} />
            </div>
            <ul className={`${styles.userListItens}`}>
              <li>
                <a href=".">
                  <img src={Group} alt="Seus pedidos" />
                </a>
              </li>
              <li>
                <a href=".">
                  <img src={Heart} alt="Itens Favoritos" />
                </a>
              </li>
              <li>
                <a href=".">
                  <img src={User} alt="Seu perfil" />
                </a>
              </li>
              <li>
                <a href=".">
                  <img
                    src={ShoppingCart}
                    alt="Carrinho de compras"
                    />
                </a>
              </li>
            </ul>
          </div>
          <ul className={`${styles.listOptions}`}>
            <div>
              <p className={`${styles.font} ${styles.colorGray}`}>Todas categorias</p>
            </div>
            <li>
              <a href="." className={`${styles.font} ${styles.colorGray}`}>Supermercado</a>
            </li>
            <li>
              <a href="." className={`${styles.font} ${styles.colorGray}`}>Livros</a>
            </li>
            <li>
              <a href="." className={`${styles.font} ${styles.colorGray}`}>Moda</a>
            </li>
            <li>
              <a href="." className={`${styles.font} ${styles.colorGray}`}>Lançamentos</a>
            </li>
            <li>
              <a className={`${styles.pinkFont} ${styles.font}`} href=".">Ofertas do dia</a>
            </li>
            <li className={`${styles.boxInfoAndIcon}`}>
              <img src={Crown} />
              <a href="." className={`${styles.font} ${styles.colorGray}`}>Assinatura</a>
            </li>
          </ul>
        </nav>
        
          </div>
    </header>
  );
}
