import React from "react";
import "../styles/styles.scss";
import iconeFace from "../imgs/redes-sociais/023-facebook.png";
import  iconeInsta from "../imgs/redes-sociais/044-instagram.png";
import iconeYoutube from "../imgs/redes-sociais/116-youtube.png";

import iconeLogos from "../imgs/letras-logos-branco/logos-Vtex-Econverse.png";

import iconeVisa from "../imgs/icone-cartoes/visa.png";
import iconeAlelo from "../imgs/icone-cartoes/alelo.png";
import iconeAmex from "../imgs/icone-cartoes/amex.png";
import iconeDinners from "../imgs/icone-cartoes/dinners.png";
import iconeElo from "../imgs/icone-cartoes/elo.png";
import iconeIfood from "../imgs/icone-cartoes/ifood.png";
import iconeMaster from "../imgs/icone-cartoes/mastercard.png";
import iconePix from "../imgs/icone-cartoes/pix.png";
import iconeSodexo from "../imgs/icone-cartoes/sodexo.png";
import iconeTicket from "../imgs/icone-cartoes/ticket.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section">
          <h3>Sobre nós</h3>
          <ul>
            <li>
              <a href="#">Conheça</a>
            </li>
            <li>
              <a href="#">Como Comprar</a>
            </li>
            <li>
              <a href="#">Indicação e Desconto</a>
            </li>
          </ul>
          <div className="social-media">
            <a href="#">
              <img src={iconeFace} alt="" />
            </a>
            <a href="#">
            <img src={iconeInsta} alt="" />
            </a>
            <a href="#">
            <img src={iconeYoutube} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Informações úteis</h3>
          <ul>
            <li>
              <a href="#">Fale Conosco</a>
            </li>
            <li>
              <a href="#">Dúvidas</a>
            </li>
            <li>
              <a href="#">Prazos de Entrega</a>
            </li>
            <li>
              <a href="#">Formas de Pagamento</a>
            </li>
            <li>
              <a href="#">Política de Privacidade</a>
            </li>
            <li>
              <a href="#">Trocas e Devoluções</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Formas de Pagamento</h3>
          <ul className="payment-methods">
            <li>
            <img src={iconeVisa} alt="" />
            </li>
            <li>
            <img src={iconeElo} alt="" />
            </li>
            <li>
            <img src={iconeAlelo} alt="" />
            </li>
            <li>
            <img src={iconeDinners} alt="" />
            </li>
            <li>
            <img src={iconeIfood} alt="" />
            </li>
            <li>
            <img src={iconeMaster} alt="" />
            </li>
            <li>
            <img src={iconePix} alt="" />
            </li>
            <li>
            <img src={iconeAmex} alt="" />
            </li>
            <li>
            <img src={iconeTicket} alt="" />
            </li>
            <li>
            <img src={iconeSodexo} alt="" />
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <div className="footer-form">
          <h3>CADASTRA-SE E RECEBER NOSSAS</h3> 
          <h2>NOVIDADES E PROMOÇÕES</h2>
          <p>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
          <form className="newsletter-form">
            <input type="email" placeholder="SEU E-MAIL" required></input>
            <button type="submit">OK</button>
          </form>
        </div>
        </div>
        <div className="footer-copy">
          <p>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.  
          É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>

          <img src={iconeLogos} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
