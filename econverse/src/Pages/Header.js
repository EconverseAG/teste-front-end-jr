import React from "react";
import '../Styles/HeaderLayout.css';
import logo from "../Images/logo.png";
import v from "../Images/v.png";
import t from "../Images/t.png";
import e from "../Images/e.png";
import x from "../Images/x.png";
import caixa from "../Images/caixaCompra.png";
import coracao from "../Images/Heart.png";
import perfil from "../Images/UserCircle.png";
import carrinho from "../Images/ShoppingCart.png";
import shield from "../Images/ShieldCheck.svg";
import frete from "../Images/Truck.svg";
import cartao from "../Images/CreditCard.svg";
import assinatura from "../Images/CrownSimple.svg";
import desconto from "../Images/Rectangle250.png";

export const Header = () => {
    return (
        <div className="container-geral">
            <div className="container-compras">

                <img className="vetor-shield" src={shield} />
                <div className="posiciona-frase-shield">
                    <p className="letras-cinza">Compra <span className="letras-rosa"> 100% segura</span></p>
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
                <img className="vetor-v" src={v} />
                <img className="vetor-t" src={t} />
                <img className="vetor-e" src={e} />
                <img className="vetor-x" src={x} />
                <input id="input1" placeholder="O que você está buscando?" />
                <img className="vetor-caixa" src={caixa} />
                <img className="vetor-coracao" src={coracao} />
                <img className="vetor-perfil" src={perfil} />
                <img className="vetor-carrinho" src={carrinho} />
            </div>
            <div className="container-categorias">
                <h4 className="todas-categorias">todas as categorias</h4>
                <h4 className="suhpermercado">supermercado</h4>
                <h4 className="livros">livros</h4>
                <h4 className="moda">moda</h4>
                <h4 className="lancamentos">lançamentos</h4>
                <h4 className="ofertas-do-dia">ofertas do dia</h4>
                <div className="container-assinatura">
                    <img src={assinatura} />
                    <h4>assinatura</h4>
                </div>
            </div>
            <div className="container-descontos">
                <div className="container-imagem-descontos">
                <img className="imagem-desconto" src={desconto}/>
                </div>
                <p className="paragrafo-desconto">Venha conhecer nossas promoções</p>
                <p className="paragrafo-desconto-2">50% off nos produtos</p>
                <button className="botao-desconto" id="frase-botao">Ver produto</button>
            </div>
        </div>
    )
};