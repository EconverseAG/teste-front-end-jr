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
import { useContext} from "react"
import { ProductContext } from "../../providers/ProductContext"



function Header(){

    const {setFilteredProducts, filteredProducts } = useContext(ProductContext)

    function handleSubmit(e:any){
        e.preventDefault()

        setFilteredProducts(filteredProducts)

    }   


    return (
        <header className="container">
            <ul className="ul-info">
                <li>
                    <img src={ShieldCheck} />
                    <p>Compra <span> 100% segura</span></p>
                </li>
                <li>
                    <img src={TruckImg} />
                    <p><span>Frete grátis</span> acima de R$ 200</p>
                </li>
                <li>
                    <img src={CardImg} />
                    <p><span>Parcele</span> sua compra</p>
                </li>
            </ul>
            <div className="div-header-middle">
                <img src={VtexLogo} />
                <form onSubmit={handleSubmit} className="div-search">
                    <input value={filteredProducts} onChange={(e)=>setFilteredProducts(e.target.value)} placeholder="O que está buscando" />
                    <button type="submit"><img src={SearchImg} /></button>
                </form>

                <ul className="ul-buttons">
                    <li><img src={GoBackImg} /></li>
                    <li><img src={HeartImg} /></li>
                    <li><img src={UserImg} /></li>
                    <li><img src={CartImg} /></li>
                </ul>
            </div>
            <ul className="ul-header">
                <li >TODAS AS CATEGORIAS</li>
                <li >SUPERMERCADO</li>
                <li >LIVROS</li>
                <li >MODA</li>
                <li >LANÇAMENTOS</li>
                <li >OFERTAS DO DIA</li>
                <li >ASSINATURA</li>
            </ul>
        </header>
    )

}

export default Header