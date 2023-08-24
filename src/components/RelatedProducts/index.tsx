import "./styles.scss"
import CrossedWord from "../CrossedWord"

function RelatedProducts(){

    return(
        <div className="container">
           <CrossedWord />
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