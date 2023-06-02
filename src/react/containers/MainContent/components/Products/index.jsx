import React from 'react';

import './styles.scss';

function Products() {
	const imageUrl = new URL('~/src/assets/productsBanner.png?as=webp', import.meta.url);

	return (
		<div className='l-products'>
			<div className='l-products__image'>
				<img src={imageUrl} alt='Parceiros' />
			</div>
			<div className='l-products__image'>
				<img src={imageUrl} alt='Parceiros' />
			</div>
		</div>
	);
}

export default Products;
