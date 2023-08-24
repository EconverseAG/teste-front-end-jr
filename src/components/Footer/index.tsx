import "./styles.scss"
import PaymentsLogo from "../../assets/footer/formas_pagamento.png"
import SocialNetworkLogos from "../../assets/footer/social-network.png"
import FooterLogos from "../../assets/footer/footer-logos.png"

function Footer(){

    return (
        <footer className="div-footer">
            <div className="container footer-container">
                <div className="div-footer-left">
                    <div>
                        <h4>Sobre nós</h4>
                        <p>CONHEÇA</p>
                        <p>COMO COMPRAR</p>
                        <p>INDICAÇÃO E DESCONTO</p>
                        <img className="social-network-img" src={SocialNetworkLogos} alt="social network logos" />
                    </div>
                    <div>
                        <h4>INFORMAÇÕES ÚTEIS</h4>
                        <p>FALE CONOSCO</p>
                        <p>DÚVIDAS</p>
                        <p>PRAZOS DE ENTREGA</p>
                        <p>FORMAS DE PAGAMENTO</p>
                        <p>POLÍTICA DE PRIVACIDADE</p>
                        <p>TROCAS E DEVOLUÇÕES</p>
                    </div>
                    <div>
                        <h4>FORMAS DE PAGAMENTO</h4>
                        <img src={PaymentsLogo} alt="payment method logos" />
                    </div>
                </div>
                <div className="div-footer-right">
                    <p className="first-text">CADASTRE-SE E RECEBA NOSSAS <span>NOVIDADES E PROMOÇÕES</span></p>
                    <p className="second-text">Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
                    <div>
                        <input type="text" placeholder="SEU E-MAIL" />
                        <button>OK</button>
                    </div>
                </div>
            </div>
            <div className="bottom-footer">
                <div className="container bottom-text">
                    <p>COPYRIGHT 2019. TODOS OS DIREITOS RESERVADOS. TODAS AS MARCAS E SUAS IMAGENS SÃO DE PROPRIEDADE DE SEUS
                        RESPECTIVOS DONOS. É VEDADA A REPRODUÇÃO, TOTAL OU PARCIAL, DE QUALQUER CONTEÚDO SEM EXPRESSA AUTORIZAÇÃO.
                    </p>
                    <img src={FooterLogos} />

                </div>


            </div>


        </footer>
    )
}

export default Footer