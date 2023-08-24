import "./style.scss"
import UserImg from "../../assets/header/UserCircle.png"
import HeartImg from "../../assets/header/Heart.png"
import CartImg from "../../assets/header/ShoppingCart.png"
import GoBackImg from "../../assets/header/Vector (4).png"
import VtexLogo from "../../assets/header/vtex_logo.png"
import SearchImg from "../../assets/header/MagnifyingGlass.png"
import ShieldCheck from "../../assets/header/ShieldCheck.png"
import TruckImg from "../../assets/header/Truck.png"
import CardImg from "../../assets/header/CreditCard.png"



function Header(){

    return (
        <header className="container">
            <ul className="ul-info">
                <li className="li-header">
                    <img src={ShieldCheck} />
                    <p>Compra <span> 100% segura</span></p>
                </li>
                <li className="li-header">
                    <img src={TruckImg} />
                    <p><span>Frete grátis</span> acima de R$ 200</p>
                </li>
                <li className="li-header">
                    <img src={CardImg} />
                    <p><span>Parcele</span> sua compra</p>
                </li>
            </ul>
            <div className="div-header-middle">
                <img src={VtexLogo} />
                <div className="div-search">
                    <input placeholder="O que está buscando" />
                    <img src={SearchImg}  />
                </div>

                <ul className="ul-buttons">
                    <li><img src={GoBackImg} /></li>
                    <li><img src={HeartImg} /></li>
                    <li><img src={UserImg} /></li>
                    <li><img src={CartImg} /></li>
                </ul>
            </div>
            <ul className="ul-header">
                <li className="li-header">TODAS AS CATEGORIAS</li>
                <li className="li-header">SUPERMERCADO</li>
                <li className="li-header">LIVROS</li>
                <li className="li-header">MODA</li>
                <li className="li-header">LANÇAMENTOS</li>
                <li className="li-header">OFERTAS DO DIA</li>
                <li className="li-header">ASSINATURA</li>
            </ul>
        </header>
    )

}

export default Header