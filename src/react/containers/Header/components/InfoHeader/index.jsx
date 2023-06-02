import React from 'react';

import './styles.scss';

import ShieldLogo from '~/src/assets/ShieldCheck.svg';
import TruckLogo from '~/src/assets/Truck.svg';
import CreditCardLogo from '~/src/assets/CreditCard.svg';

function InfoHeader() {
	return (
		<div className='l-infoHeader'>
			<div className='l-infoHeader__infoCard'>
				<ShieldLogo />
				Compra<strong> 100% segura</strong>
			</div>
			<div className='l-infoHeader__infoCard'>
				<TruckLogo />
				<strong>Frete grátis </strong>acima de R$ 200
			</div>
			<div className='l-infoHeader__infoCard'>
				<CreditCardLogo />
				<strong>Parcele </strong>suas compras
			</div>
		</div>
	);
}

export default InfoHeader;
