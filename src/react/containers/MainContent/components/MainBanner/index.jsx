import React from 'react';

import './styles.scss';

function MainBanner() {
	return (
		<div className='l-mainBanner'>
			<div className='l-mainBanner__text'>
				Venha conhecer nossas promoções<br />50% Off nos produtos
			</div>
			<button className='l-mainBanner__button'>Ver produto</button>
		</div>
	);
}

export default MainBanner;
