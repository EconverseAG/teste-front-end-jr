import "./styles.scss"
import LineImg from "../../assets/body/grayline.png"


function CrossedWord(){

    return(
        
        <div className="div-cross-word">
            <img src={LineImg} />
            <h2>Produtos Relacionados</h2>
            <img src={LineImg} />
        </div>
    )
}

export default CrossedWord