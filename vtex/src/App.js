import Scroll from './components/img/arrow-marks.png';
import Run from './components/img/corrida 1.png';
import Card from './components/img/CreditCard.png';
import Crown from './components/img/CrownSimple.png';
import Health from './components/img/cuidados-de-saude 1.png';
import Econverse from './components/img/econverse.png';
import Facebook from './components/img/facebook.png';
import Tools from './components/img/ferramentas 1.png';
import Payment from './components/img/formas_pagamento.png';
import Group from './components/img/Group.png';
import Heart from './components/img/Heart.png';
import Instagram from './components/img/instagram.png';
import Glass from './components/img/MagnifyingGlass.png';
import Moda from './components/img/moda 1.png';
import Tecnology from './components/img/tablet.png';
import Check from './components/img/ShieldCheck.png';
import Cart from './components/img/ShoppingCart.png';
import Market from './components/img/supermercados 1.png';
import Truck from './components/img/Truck.png';
import User from './components/img/UserCircle.png';
import whiteLogo from './components/img/vtex-white-logo.png';
import Logo from './components/img/vtex.png';
import Bebidas from './components/img/whiskey.png';
import Youtube from './components/img/youtube.png';
import './style.css';
import Vitrine from './components/Vitrine/Vitrine';

function App() {

  return (
    <div className="App">
      <header>
            <div id="head-top">
                <ul id="info-box">
                    <li id="info-item">
                        <img id="Check" src={Check} alt=''/>
                        <p id="check-text">Compra <pink id="emphasis-left"> 100% segura</pink></p>
                    </li>
              
                    <li id="info-item">
                        <img id="Truck" src={Truck} alt='' />
                        <p id="truck-text"><pink id="emphasis-right">Frete grátis</pink> acima de R$ 200</p>
                    </li>

                    <li id="info-item">
                        <img id="Card" src={Card} alt='' />
                        <p id="card-text"><pink id="emphasis-right">Parcele </pink>suas compras</p>
                    </li>
                </ul>
                    
            </div>
            <div id="head-middle">
                <img id="logo" src={Logo} alt='' />
                <div id="divBusca">
                    <input type="text" id="txtBusca" placeholder="O que você está buscando?"/>
                    <img src={Glass} id="btnBusca" alt=''/>
                </div>
                <img id="group" src={Group} alt=''/>
                <img id="heart" src={Heart} alt=''/>
                <img id="user" src={User} alt=''/>
                <img id="cart" src={Cart} alt=''/>
            </div>
            <div id="head-bottom">
                <ul id="menu">
                    <li id="menu-text">TODAS CATEGORIAS</li>
                    <li id="menu-text">SUPERMERCADO</li>
                    <li id="menu-text">LIVROS</li>
                    <li id="menu-text">MODA</li>
                    <li id="menu-text">LANÇAMENTOS</li>
                    <li id="menu-text"><pink id="emphasis">OFERTAS DO DIA</pink></li>
                    <li id="menu-text"><img id="crown" src={Crown} alt=''/>ASSINATURA</li>
                </ul>
            </div>
                
        </header>
        <main>
            <div id="promotion">
                <h1 id="promotion-text">Venha conhecer nossas promoções</h1>
                <h1 id="promo">50% Off nos produtos </h1>
                <button id="viewproduct">Ver produto</button>
            </div>
            <div id="categorys">
                <div id="tec-box">
                    <button id="tec"><img src={Tecnology} alt=''/></button>
                    <p id="tec-text">Tecnologia</p>
                </div>
           
                <div id="category-box">
                    <button id="category-button"><img src={Market} alt =''/></button>
                    <p id="category-text">Supermercado</p>
                </div>

                <div id="category-box">
                    <button id="category-button"><img src={Bebidas} alt=''/></button>
                    <p id="category-text">Bebidas</p>
                </div>

                <div id="category-box">
                    <button id="category-button"><img src={Tools} alt=''/></button>
                    <p id="category-text">Ferramentas</p>
                </div>

                <div id="category-box">
                    <button id="category-button"><img src={Health} alt=''/></button>
                    <p id="category-text">Saúde</p>
                </div>

                <div id="category-box">
                    <button id="category-button"><img src={Run} alt=''/></button>
                    <p id="category-text">Esportes e Fitness</p>
                </div>

                <div id="category-box">
                    <button id="category-button"><img src={Moda} alt=''/></button>
                    <p id="category-text">Moda</p>
                </div>
            </div>
            
            <div id="product-box">
                <div id="product-headline">
                    <div id="line"></div>
                    <h2 id="product-title">Produtos Relacionados</h2>
                    <div id="line"></div>
                </div>
                <div id="product-menu">
                    <button id="product-button-cel">CELULAR</button>
                    <button id="product-button">ACESSÓRIOS</button>
                    <button id="product-button">TABLETS</button>
                    <button id="product-button">NOTEBOOKS</button>
                    <button id="product-button">TVS</button>
                    <button id="product-button">VER TODOS</button>
                </div>
                <Vitrine/>
            </div>
            
            <div id="parceiros-box">
                <div id="parceiro">
                    <h1 id="parceiros-title">Parceiros</h1>
                    <p id="parceiros-text">Lorem ipsum dolor sit amet, consectetur</p>
                    <button id="parceiros-button">CONFIRA</button>
                </div>
                <div id="parceiro-right">
                    <h1 id="parceiros-title">Parceiros</h1>
                    <p id="parceiros-text">Lorem ipsum dolor sit amet, consectetur</p>
                    <button id="parceiros-button">CONFIRA</button>
                </div>
            </div>
            
            <div id="product-box-middle">
                <div id="product-headline">
                    <div id="line"></div>
                    <h2 id="product-title">Produtos Relacionados</h2>
                    <div id="line"></div>
                </div>
                <p id="view-more">Ver Todos</p>
                <Vitrine/>
            </div>
            
            <div id="stuff-box">
                <div id="stuff">
                    <h1 id="stuff-title">Produtos</h1>
                    <p id="stuff-text">Lorem ipsum dolor sit amet, consectetur</p>
                    <button id="stuff-button">CONFIRA</button>
                </div>
                <div id="stuff-right">
                    <h1 id="stuff-title">Produtos</h1>
                    <p id="stuff-text">Lorem ipsum dolor sit amet, consectetur</p>
                    <button id="stuff-button">CONFIRA</button>
                </div>
            </div>
            <div id="marks">
                <h2 id="marks-title">Navegue por marcas</h2>
                <div id="marks-menu">
                        <button id="marks-button"><img src={Logo} alt=''/></button>
                        <button id="marks-button"><img src={Logo} alt=''/></button>
                        <button id="marks-button"><img src={Logo} alt=''/></button>
                        <button id="marks-button"><img src={Logo} alt=''/></button>
                        <button id="marks-button"><img src={Logo} alt=''/></button>
                        <button id="scroll-marks"><img src={Scroll} alt=''/></button>
                </div>
            </div>
            
            <div id="product-box-end">
                <div id="product-headline">
                    <div id="line"></div>
                    <h2 id="product-title">Produtos Relacionados</h2>
                    <div id="line"></div>
                </div>
                <p id="view-more">Ver Todos</p>
                <Vitrine/>
                </div> 
        </main>
        <footer>
            <div id="top-footer">
                <div id="informations">
                    <div id="institutional">
                        <h3 id="top-footer-title">Sobre nós</h3>
                        <ul id="top-footer-list">
                            <li id="top-footer-list-item">CONHEÇA</li>
                            <li id="top-footer-list-item">COMO COMPRAR</li>
                            <li id="top-footer-list-item">INDICAÇÃO E DESCONTO</li>
                        </ul>
                        <div id="social-media">
                            <img src={Facebook} alt=''/>
                            <img id='instagram' src={Instagram} alt=''/>
                            <img src={Youtube} alt=''/>
                        </div>
                    </div>
                    <div id="useful-informations">
                        <h3 id="top-footer-title">Sobre nós</h3>
                        <ul id="top-footer-list">
                            <li id="top-footer-list-item">FALE CONOSCO</li>
                            <li id="top-footer-list-item">DÚVIDAS</li>
                            <li id="top-footer-list-item">PRAZOS DE ENTREGA</li>
                            <li id="top-footer-list-item">FORMAS DE PAGAMENTO</li>
                            <li id="top-footer-list-item">POLÍTICA DE PRIVACIDADE</li>
                            <li id="top-footer-list-item">TROCAS E DEVOLUÇÕES</li>
                        </ul>
                    </div>
                    <div id="payment">
                        <h3 id="top-footer-title">FORMAS DE PAGAMENTO</h3>
                        <img src={Payment} alt=''/>
                    </div>
                </div>
                
                <div id="news">
                    <h1 id="news-title">Cadastre-se e Receba nossas</h1>
                    <h1 id="news-title-emphasis">novidades e promoções</h1>
                    <p id="news-text">Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
                    <div id="email-box">
                        <input type="email" id="email-camp" placeholder="Seu e-mail"/>
                        <button id="ok">OK</button>
                    </div>
                </div>
            </div>
            <div id="bottom-footer">
                <p id="copyright">Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.  
                    É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.
                </p>
                <img src={Econverse} alt=''/>
                <img src={whiteLogo} alt=''/>
            </div>
        </footer>
    </div>
  );
}

export default App;
