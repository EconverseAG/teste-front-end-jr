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

export const Header = () => {
    return(
        <div className="container-geral">
            <div className="container-input-vetor ">
                <img className="vetor-vtex " src={logo}/>
                <img className="vetor-v" src={v}/>
                <img className="vetor-t" src={t}/>
                <img className="vetor-e" src={e}/>
                <img className="vetor-x" src={x}/>
                <input id="input1" placeholder="o que você está buscando?" />
                <img className="vetor-caixa" src={caixa}/>
                <img className="vetor-coracao" src={coracao}/>
                <img className="vetor-perfil" src={perfil}/>
                <img className="vetor-carrinho" src={carrinho}/>
            </div>
        </div>
    )
};