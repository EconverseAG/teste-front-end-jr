import './footer.scss';
import React from "react";

function Footer() {
    return (
        <div className="div-footer">
            <div>
                <h1>Sobre Nós</h1>
                <div>
                    <p>Conheça</p>
                    <p>Como Comprar</p>
                    <p>Indicação e Desconto</p>
                </div>
            </div>
            <div>
                <h1>Informações Úteis</h1>
                <div>
                    <p>Fale Conosco</p>
                    <p>Dúvidas</p>
                    <p>Prazos de Entrega</p>
                    <p>Formas de Pagamento</p>
                    <p>Política de Privacidade</p>
                    <p>Trocas e Devoluções</p>
                </div>
            </div>
            <div>
                <h1>Formas de Pagamento</h1>
                <div>
                    <p>Visa</p>
                    <p>Elo</p>
                    <p>Alelo</p>
                </div>
                <div>
                    <p>Diners Club</p>
                    <p>Ifood</p>
                    <p>Mastercard</p>
                </div>
                <div>
                    <p>Pix</p>
                    <p>American Express</p>
                    <p>Ticket</p>
                </div>
                <div>
                    <p>Sodexo</p>
                </div>
            </div>
            <div>
                <h3>Cadastre-se e receba nossas</h3>
                <h1>Novidades e promoções</h1>
                <p>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
                <div>
                    <input type="email" placeholder="SEU E-MAIL" />
                    <button>ok</button>
                </div>
            </div>
            <div>
                <div>
                    <p>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.</p>
                    <p>É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>
                </div>
                <div>
                    <p>Logo Econverse</p>
                    <p>Logo VTEX</p>
                </div>
            </div>

        </div>
    );
}

export default Footer;