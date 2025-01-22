import "../styles/main.scss"
import "../styles/layout/_navbar.scss"
import Shield from "../assets/icons/ShieldCheck.svg"
import Truck from "../assets/icons/Truck.svg"
import Card from "../assets/icons/CreditCard.svg"
import Logo from "../assets/images/Logo.png"
import Magnifier from "../assets/icons/MagnifyingGlass.svg"
import Group from "../assets/icons/Group.svg"
import Heart from "../assets/icons/Heart.svg"
import UserCircle from "../assets/icons/UserCircle.svg"
import ShoppingCart from "../assets/icons/ShoppingCart.svg"


export function Navbar() {
    return (
        <div className="navbar">
            <div className="navbarIcons">
                <div id="navbarIcon1">
                    <img src={Shield} alt="Ícone de escudo" />
                    <p>Compra <span className="navSpan">100% segura</span></p>
                </div>
                <div id="navbarIcon2">
                    <img src={Truck} alt="Ícone de caminhão" />
                    <p><span className="navSpan">Frete grátis</span> acima de R$ 200</p>
                </div>
                <div id="navbarIcon3">
                    <img src={Card} alt="Ícone de cartão" />
                    <p><span className="navSpan">Parcele</span> suas compras</p>
                </div>      
            </div>
            <hr className="separator" />
            <div className="navbarContent">
                <img className="navbarLogo" src={Logo} alt="Logo Econverse" />
                    <div className="navSearch">
                        <input
                        type="text"
                        id="searchBar"
                        placeholder="O que você está buscando?"
                    />
                    <button className="searchButton">
                        <img className="searchIcon" src={Magnifier} alt="Ícone de lupa"/>
                    </button> 
                </div>
                <div className="contentIcons">
                    <button className="iconButton">
                        <img src={Group} alt="Ícone de caixa" />
                    </button>
                    <button className="iconButton">
                        <img src={Heart} alt="Ícone de coração" />
                    </button>
                    <button className="iconButton">
                        <img src={UserCircle} alt="Ícone de usuário" />
                    </button>
                    <button className="iconButton">
                        <img src={ShoppingCart} alt="Ícone de carrinho de compras" />
                    </button>
                </div>
            </div>
        </div>
    )
};