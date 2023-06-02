import React from 'react';

import './styles.scss';

function Partners() {
	const imageUrl = new URL('~/src/assets/partnerBanner.png?as=webp', import.meta.url);

	return (
		<div className='l-partners'>
			<div className='l-partners__image'>
				<img src={imageUrl} alt='Parceiros' />
			</div>
			<div className='l-partners__image'>
				<img src={imageUrl} alt='Parceiros' />
			</div>
		</div>
	);
}

export default Partners;
