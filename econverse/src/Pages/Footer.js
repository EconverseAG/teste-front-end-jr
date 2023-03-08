import React from "react";
import '../Styles/FooterLayout.css';

export const Footer = () => {
    return (
        <div>
            <div className="container-geral-sobre-nos">
                <div className="container-institucional" >
                    <span id="frase-sobre-nos">Sobre nós</span>
                    <div className="container-sobre-nos">
                        <p>conheça</p>
                        <p>como comprar</p>
                        <p>indicação e desconto</p>
                    </div>

                    <div className="container-redes-sociais">
                        <span id="face" />
                        <span id="instagram" />
                        <span id="youtube" />
                    </div>
                </div>

                <div className="container-geral-informacoes">
                    <span id="frase-info">Informações úteis</span>
                    <div className="container-info">
                        <p>fale conosco</p>
                        <p>dúvidas</p>
                        <p>prazos de entrega</p>
                        <p>formas de pagamento</p>
                        <p>política de privacidade</p>
                        <p>trocas e devoluções</p>
                    </div>
                </div>

                <div className="container-pagamento">
                    <span id="frase-pagamento">formas de pagamento</span>
                    <div className="container-formas-pagamento">
                        <span id="img-visa" />
                        <span id="img-dinners" />
                        <span id="img-pix" />
                        <span id="img-sodexo" />
                        <span id="img-elo" />
                        <span id="img-ifood" />
                        <span id="img-amex" />
                        <span id="img-alelo" />
                        <span id="img-mastercard" />
                        <span id="img-ticket" />
                    </div>
                </div>

                <div className="container-geral-cadastro">
                    <div className="container-cadastro">
                        <div id="box-frase1 ">
                            <p id="frase1">cadastre-se e receba nossas </p><span id="frase2">novidades e promoções</span>
                        </div>
                        <div className="container-frase3">
                            <p id="frase3">Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
                        </div>
                        <div className="container-botao-cadastro">
                            <input className="input-cadastro" placeholder="seu e-mail" />
                            <button className="botao-cadastro" >OK</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-geral-copyright">
                <div className="container-frase-copyright">
                    <span>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas
                        imagens são de propriedade de seus respectivos donos. É vedada a reprodução,
                        total ou parcial, de qualquer conteúdo sem expressa autorização.</span>
                </div>
                <div className="container-imagem-logos ">
                    <div id="image-econverse" />
                    <div id="image-vtex" />
                </div>
            </div >
        </div >
    )
};
