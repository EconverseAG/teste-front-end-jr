import React from 'react';

import './styles.scss';

import Institutional from './components/Institutional';
import Newsletter from './components/Newsletter';

import EconverseIcon from '~/src/assets/EconverseIcon.svg';
import VtexLogo from '~/src/assets/VtexLogoWhite.svg';

function Footer() {
	return (
		<>
			<footer className='l-footer'>
				<Institutional />
				<Newsletter />
			</footer>
			<div className='l-footer__copyright'>
				<p className='l-footer__copyright__text'>
						Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos. <br />
						É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.
				</p>
				<div className='l-footer__copyright__icons'>
					<EconverseIcon />
					<VtexLogo />
				</div>
			</div>
		</>
	);
}

export default Footer;
