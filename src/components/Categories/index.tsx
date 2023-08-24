import "./style.scss"
import TechImg from "../../assets/body/monitor.png"
import SuperMktImg from "../../assets/body/supermercados.png"
import DrinkImg from "../../assets/body/whiskey.png"
import ToolImg from "../../assets/body/ferramentas.png"
import HealthImg from "../../assets/body/saude.png"
import FitnessImg from "../../assets/body/corrida.png"
import FashionImg from "../../assets/body/moda.png"

function Categories(){


    return (
        <div className="container">
            <ul className="ul-categories">
                <li className="li-categories">
                    <div className="div-categories-white"><img src={TechImg} alt="tech logo" /></div>
                    <span>Tecnologia</span>
                </li>
                <li className="li-categories">
                    <div className="div-categories"><img src={SuperMktImg} alt="supermarket logo" /></div>
                    <p>Supermercado</p>
                </li>
                <li className="li-categories">
                    <div className="div-categories"><img src={DrinkImg} alt="drink logo" /></div>
                    <p>Bebidas</p>
                </li>
                <li className="li-categories">
                    <div className="div-categories"><img src={ToolImg} alt="tool logo" /></div>
                    <p>Ferramentas</p>
                </li>
                <li className="li-categories">
                    <div className="div-categories"><img src={HealthImg} alt="health logo" /></div>
                    <p>Saúde</p>
                </li >
                <li className="li-categories">
                    <div className="div-categories"><img src={FitnessImg} alt="fitness logo" /></div>
                    <p>Esporte e Fitness</p>
                </li>
                <li className="li-categories">
                    <div className="div-categories"><img src={FashionImg} alt="fashion logo" /></div>
                    <p>Moda</p>
                </li>
              
            </ul>
        </div>

    )
}

export default Categories