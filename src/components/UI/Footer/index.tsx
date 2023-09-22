import { FormEvent, RefObject } from 'react';
import './styles.scss';
import { Button } from '..';

import facebookIcon from '../../../assets/icons/facebook.svg';
import instagramIcon from '../../../assets/icons/instagram.svg';
import youtubeIcon from '../../../assets/icons/youtube.svg';
import paymentFlags from '../../../assets/payment-flags.svg';
import econverseLogoIcon from '../../../assets/econverse-logo.svg';
import vtexLogoIcon from '../../../assets/vtex.svg';

interface FooterProps {
  ref: RefObject<HTMLDivElement>
}

export function Footer({ ref }: FooterProps) {
  function handleSendEmail(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <footer className="footer-container" ref={ref}>
      <div className="top">
        <div className="options">
          <nav className="about-us-section">
            <h4>Sobre nós</h4>

            <div className="links-container">
              <a href="#">Conheça</a>
              <a href="#">Como chegar</a>
              <a href="#">Indicação e desconto</a>
            </div>

            <div className="social-container">
              <a href="#" title="Vtrex Facebook">
                <img src={facebookIcon} alt="Ícone do Facebook" />
              </a>
              <a href="#" title="Vtrex Instagram">
                <img src={instagramIcon} alt="Ícone do Instagram" />
              </a>
              <a href="#" title="Vtrex Youtube">
                <img src={youtubeIcon} alt="Ícone do Youtube" />
              </a>
            </div>
          </nav>
          <nav className="info-section">
            <h4>Informações úteis</h4>

            <div className="links-container">
              <a href="#">Fale conosco</a>
              <a href="#">Dúvidas</a>
              <a href="#">Prazos de entrega</a>
              <a href="#">Formas de Pagamento</a>
              <a href="#">Política de privacidade</a>
              <a href="#">Trocas e devoluções</a>
            </div>
          </nav>
          <nav className="payments-section">
            <h4>Formas de pagamento</h4>

            <div className="payment-flags">
              <img src={paymentFlags} alt="Todas as bandeiras disponiveis para pagamento" />
            </div>
          </nav>
        </div>
        <div className="email-container">
          <h3>Cadastre-se e Receba nossas <strong>novidades e promoções</strong></h3>
          <span>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</span>

          <form onSubmit={handleSendEmail}>
            <input type="email" placeholder="Seu e-mail" />

            <div className="form-button-container">
              <Button
                text="Ok"
                type='submit'
              />
            </div>
          </form>
        </div>
      </div>

      <div className="bottom">
        <span>
          Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.
          É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.
        </span>

        <div className="brands">
          <img src={econverseLogoIcon} alt="econverse logo" />
          <img src={vtexLogoIcon} alt="VTEX logo" />
        </div>
      </div>
    </footer>
  )
}
