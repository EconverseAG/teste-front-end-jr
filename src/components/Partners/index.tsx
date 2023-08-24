import CrossedWord from "../CrossedWord"
import "./styles.scss"


function Partners(){


    return(

        <div className="container">
            <div className="partner-section">
                <div className="partner-img">
                    <div className="mask-img">
                        <div className="div-img-text">
                            <h1>Parceiros</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                            <button>CONFIRA</button>
                        </div>
                    </div>
                </div>
                <div className="partner-img">
                    <div className="mask-img">
                        <div className="div-img-text">
                            <h1>Parceiros</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                            <button>CONFIRA</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <CrossedWord />
                <h3>Ver todos</h3>
            </div>
            <div className="partner-section">
                <div className="product-img">
                    <div>
                        <div className="div-img-text">
                            <h1>Produtos</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                            <button>CONFIRA</button>
                        </div>
                    </div>
                </div>
                <div className="product-img">
                    <div >
                        <div className="div-img-text">
                            <h1>Produtos</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                            <button>CONFIRA</button>
                        </div>
                    </div>
                </div>
            </div>
            



        </div>
            
    )
}

export default Partners