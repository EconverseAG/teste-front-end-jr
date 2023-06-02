import React from 'react';

import './styles.scss';

import FacebookIcon from '~/src/assets/FacebookIcon.svg';
import InstagramIcon from '~/src/assets/InstagramIcon.svg';
import YoutubeIcon from '~/src/assets/YoutubeIcon.svg';

import VisaIcon from '~/src/assets/VisaIcon.svg';
import EloIcon from '~/src/assets/EloIcon.svg';
import AleloIcon from '~/src/assets/AleloIcon.svg';
import DinnersIcon from '~/src/assets/DinnersIcon.svg';
import IFoodIcon from '~/src/assets/IFoodIcon.svg';
import MastercardIcon from '~/src/assets/MastercardIcon.svg';
import PixIcon from '~/src/assets/PixIcon.svg';
import AmexIcon from '~/src/assets/AmexIcon.svg';
import TicketIcon from '~/src/assets/TicketIcon.svg';
import SodexoIcon from '~/src/assets/SodexoIcon.svg';

function Institutional() {
	return (
		<div className='l-institutional'>
			<div className='l-institutional__about-us'>
				<h6 className='l-institutional__about-us__title'>
					Sobre nós
				</h6>
				<ul>
					<li>Conheça</li>
					<li>Como comprar</li>
					<li>Indicação e desconto</li>
				</ul>
				<div className='l-institutional__about-us__socials'>
					<FacebookIcon />
					<InstagramIcon />
					<YoutubeIcon />
				</div>
			</div>
			<div className='l-institutional__utils'>
				<h6 className='l-institutional__utils__title'>
					Informações úteis
				</h6>
				<ul>
					<li>Fale conosco</li>
					<li>Dúvidas</li>
					<li>Prazos de entrega</li>
					<li>Formas de pagamento</li>
					<li>Política de privacidade</li>
					<li>Trocas e devoluções</li>
				</ul>
			</div>
			<div className='l-institutional__payment-methods'>
				<h6 className='l-institutional__payment-methods__title'>
					Formas de pagamento
				</h6>
				<div className='l-institutional__payment-methods__icons'>
					<VisaIcon />
					<EloIcon />
					<AleloIcon />
					<DinnersIcon />
					<IFoodIcon />
					<MastercardIcon />
					<PixIcon />
					<AmexIcon />
					<TicketIcon />
					<SodexoIcon />
				</div>
			</div>
		</div>
	);
}

export default Institutional;
