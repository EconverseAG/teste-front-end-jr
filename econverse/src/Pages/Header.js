import React from "react";
import '../Styles/HeaderLayout.css';
import logo from "../Images/vtex-logo-rosa.svg";
import caixa from "../Images/caixaCompra.png";
import coracao from "../Images/Heart.png";
import perfil from "../Images/UserCircle.png";
import carrinho from "../Images/ShoppingCart.png";
import shield from "../Images/ShieldCheck.svg";
import frete from "../Images/Truck.svg";
import cartao from "../Images/CreditCard.svg";
import coroa from "../Images/CrownSimple.svg";
import desconto from "../Images/Rectangle250.png";

export const Header = () => {
    return (
        <div className="container-geral">
            <div className="container-compras">
                <img className="vetor-shield" src={shield} />
                <div className="posiciona-frase-shield">
                    <span className="letras-cinza">Compra </span> <span className="letras-rosa"> 100% segura</span>
                </div>
                <img className="vetor-frete" src={frete} />
                <div className="posiciona-frase-frete">
                    <p className="letras-rosa">Frete grátis <span className="letras-cinza">acima de R$ 200</span></p>
                </div>
                <img className="vetor-cartao" src={cartao} />
                <div className="posiciona-frase-cartao">
                    <p className="letras-rosa">Parcele <span className="letras-cinza">suas compras</span></p>
                </div>
            </div>
            <div className="container-input-vetor ">
                <img className="vetor-vtex " src={logo} />
                <input id="input1" placeholder="O que você está buscando?" />
                <img className="vetor-caixa" src={caixa} />
                <img className="vetor-coracao" src={coracao} />
                <img className="vetor-perfil" src={perfil} />
                <img className="vetor-carrinho" src={carrinho} />
            </div>

            <div className="container-geral-categorias">
                <div className="container-categorias">
                    <span className="todas-categorias">todas as categorias</span>
                    <span className="supermercado">supermercado</span>
                    <span className="livros">livros</span>
                    <span className="moda">moda</span>
                    <span className="lancamentos">lançamentos</span>
                    <span className="ofertas-do-dia">ofertas do dia</span>
                    <div className="container-assinatura">
                        <img id="coroa" src={coroa} />
                        <span id="assinatura">assinatura</span>
                    </div>
                </div>
            </div>
            <div className="container-descontos">
                <div className="container-imagem-descontos">
                    <img className="imagem-desconto" src={desconto} />
                </div>
                <p className="paragrafo-desconto">Venha conhecer nossas promoções</p>
                <p className="paragrafo-desconto-2">50% off nos produtos</p>
                <button className="botao-desconto" id="frase-botao">Ver produto</button>
            </div>
        </div>
    )
};