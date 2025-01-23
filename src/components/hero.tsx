import "../styles/layout/_hero.scss"
import "../styles/main.scss"
import blackfridayImage from '../assets/images/blackFriday.png'
import Tech from '../assets/icons/image.svg'
import SuperMarket from '../assets/icons/supermercados.svg'
import Drink from '../assets/icons/whiskey.svg'
import Tools from '../assets/icons/ferramentas.svg'
import SelfCare from '../assets/icons/cuidados-de-saude.svg'
import Sport from '../assets/icons/corrida.svg'
import Fashion from '../assets/icons/moda.svg'

export function Hero() {
    return (
        <div className="heroContent">
            <div className="heroOffer">
                <img className="heroOfferImage" src={blackfridayImage} alt="Imagem da promoção da Black Friday" />
                <div className="heroOfferContent">
                <h1>Venha conhecer nossas promoções</h1>
                <h2>
                    50% Off <span>nos produtos</span>
                </h2>
                <a href="#" className="heroOfferButton">Ver produto</a>
                </div>
            </div>
            <div className="heroSection">
                <div className="heroSectionCards">
                    <ul className="heroCard">
                        <li>
                            <a href="#">
                                <div className="card">
                                    <img src={Tech} alt="Ícone de tecnologia" />
                                </div>
                                <p>Tecnologia</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="card">
                                    <img src={SuperMarket} alt="Ícone de supermercado" />
                                </div>
                                <p>Supermercado</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="card">
                                    <img src={Drink} alt="Ícone de bebida" />
                                </div>
                                <p>Bebidas</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="card">
                                    <img src={Tools} alt="Ícone de ferramentas" />
                                </div>
                                <p>Ferramentas</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="card">
                                    <img src={SelfCare} alt="Ícone de autocuidado" />
                                </div>
                                <p>Saúde</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="card">
                                    <img src={Sport} alt="Ícone de esporte e fitness" />
                                </div>
                                <p>Esporte e Fitness</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="card">
                                    <img src={Fashion} alt="Ícone de moda" />
                                </div>
                                <p>Moda</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>          
        </div>
    )
}