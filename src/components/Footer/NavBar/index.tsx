import React from 'react';

import alelo from 'images/Footer/alelo.png';
import americanExpress from 'images/Footer/AmericanExpress.png';
import dinners from 'images/Footer/Dinners.png';
import elo from 'images/Footer/Elo.png';
import ifood from 'images/Footer/ifood.png';
import mastercard from 'images/Footer/mastercard.png';
import pix from 'images/Footer/pix.png';
import sodexo from 'images/Footer/sodexo.png';
import ticket from 'images/Footer/Ticket.png';
import visa from 'images/Footer/Visa.png';

import ItemsNavbar from 'components/Header/Navbar/ItemsNavbar';
import Newsletter from '../Newsletter';

const FooterNavBar: React.FC = () => {
    return (
        <div className='main-footer'>
            <nav className='nav-footer'>
                <ul className='about-us'>
                    <p className='title'>
                        Sobre nós
                    </p>
                    <ItemsNavbar link='/' >Conheça</ItemsNavbar>
                    <ItemsNavbar link='/' >Como comprar</ItemsNavbar>
                    <ItemsNavbar link='/' >Indicação de desconto</ItemsNavbar>
                </ul>
                <ul className='institutional'>
                    <p className='title'>
                        INFORMAÇÕES ÚTEIS
                    </p>
                    <ItemsNavbar link='/' >Fale Conosco</ItemsNavbar>
                    <ItemsNavbar link='/' >DÚVIDAS</ItemsNavbar>
                    <ItemsNavbar link='/' >Prazos de Entrega</ItemsNavbar>
                    <ItemsNavbar link='/' >Formas de Pagamento</ItemsNavbar>
                    <ItemsNavbar link='/' >Política de privacidade</ItemsNavbar>
                    <ItemsNavbar link='/' >Trocas e Devoluções</ItemsNavbar>
                </ul>
                <div className='payment'>
                    <p className='title'>
                        FORMAS DE PAGAMENTO
                    </p>
                    <div className='payment-images'>
                        <img src={visa} alt='Visa' />
                        <img src={elo} alt='Elo' />
                        <img src={alelo} alt='Alelo' />
                        <img src={dinners} alt='Diners' />
                        <img src={ifood} alt='Ifood' />
                        <img src={mastercard} alt='Mastercard' />
                        <img src={pix} alt='Pix' />
                        <img src={americanExpress} alt='Americans Express' />
                        <img src={ticket} alt='Ticket' />
                        <img src={sodexo} alt='Sodexo' />
                    </div>
                </div>
            </nav>
            <Newsletter />
        </div>
    )
}

export default FooterNavBar
