import { HeaderBar, HeaderShip, HeaderLogo } from "./styles"

import cartao from "../../assets/images/CreditCard.svg"
import check from "../../assets/images/ShieldCheck.svg"
import truck from "../../assets/images/Truck.svg"


const Header = () => (
    <HeaderBar>
        <HeaderShip>
            <div>
                <img src={check} alt="" />
                <p>
                    Compra <span>100% segura</span>
                </p>
            </div>
            <div>
                <img src={truck} alt="" />
                <p>
                    <span>Frete grátis</span> acima de R$ 200
                </p>
            </div>
            <div>
                <img src={cartao} alt="" />
                <p>
                    <span>Parcele</span> suas compras
                </p>
            </div>
        </HeaderShip>
        <HeaderLogo>
            <div>
                <p>
                    LOGO
                </p>
            </div>
            <div>
                <input type="text" />
            </div>
            <div>
                <p>
                    AQUI DEVE TER INPUT DE PESQUISA
                </p>
            </div>
            <div>
                <p>
                    AQUI DEVE TER INPUT DE PESQUISA
                </p>
                <p>
                    AQUI DEVE TER INPUT DE PESQUISA
                </p>
            </div>
        </HeaderLogo>
        <div>
            <p>
                MENU
            </p>
        </div>
    </HeaderBar>
)

export default Header