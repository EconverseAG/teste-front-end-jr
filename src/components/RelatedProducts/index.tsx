import "./styles.scss"
import LineImg from "../../assets/body/grayline.png"

function RelatedProducts(){

    return(
        <div className="container">
            <div className="div-teste">
                <img src={LineImg} />
                <h2 className="teste">Produtos Relacionados</h2>
                <img src={LineImg} />
            </div>
            <ul className="ul-related-products">
                <li className="li-related-products pink-font">CELULAR</li>
                <li className="li-related-products">ACESSÓRIOS</li>
                <li className="li-related-products">TABLETS</li>
                <li className="li-related-products">NOTEBOOKS</li>
                <li className="li-related-products">TVS</li>
                <li className="li-related-products">VER TODOS</li>
            </ul>
        </div>
        
        
        
        
    )
}

export default RelatedProducts