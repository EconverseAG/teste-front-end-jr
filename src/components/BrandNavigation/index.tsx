import "./styles.scss"
import VtexLogo from "../../assets/header/vtex_logo.png"


function BrandNavigation(){

    return(
        <div className="container div-navigate">
            <h2>Navegue por marcas</h2>
            <ul>
                <li>
                    <button><img src={VtexLogo} alt="brand logo" /></button>
                </li>
                <li>
                    <button><img src={VtexLogo} alt="brand logo" /></button>
                </li>
                <li>
                    <button><img src={VtexLogo} alt="brand logo" /></button>
                </li>
                <li>
                    <button><img src={VtexLogo} alt="brand logo" /></button>
                </li>
                <li>
                    <button><img src={VtexLogo} alt="brand logo" /></button>
                </li>
                <button className="position-button">&gt;</button>
            </ul>
        </div>
    )
}

export default BrandNavigation