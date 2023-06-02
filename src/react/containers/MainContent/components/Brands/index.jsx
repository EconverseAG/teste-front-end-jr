import React from 'react';

import './styles.scss';

import VtexLogo from '~/src/assets/vtex_logo.svg';

function Brands() {
	return (
		<div className='l-brands'>
			<h1 className='l-brands__title'>
				Navegue por marcas
			</h1>
			<div className="l-brands__showcase">
				<div className="l-brands__showcase__item">
					<VtexLogo />
				</div>
				<div className="l-brands__showcase__item">
					<VtexLogo />
				</div>
				<div className="l-brands__showcase__item">
					<VtexLogo />
				</div>
				<div className="l-brands__showcase__item">
					<VtexLogo />
				</div>
				<div className="l-brands__showcase__item">
					<VtexLogo />
				</div>
			</div>
		</div>
	);
}

export default Brands;
