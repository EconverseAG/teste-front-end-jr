import React from 'react';

import './styles.scss';

import CloseIcon from '~/src/assets/closeIcon.svg';

function ProductCard(props) {
	const product = props.product;

	const formatter = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
		minimumFractionDigits: 2,
	});

	return (
		<>
			<dialog className='l-productModal' id={`productModal-${product?.productName}`}>
				<button className='l-productModal__close' onClick={() => {
					const modal = document.getElementById(`productModal-${product?.productName}`);
					modal.close();
				}}>
					<CloseIcon />
				</button>
				<div className='l-productModal__mainContent'>
					<div className='l-productModal__image'>
						<img src={product?.photo} alt={product?.productName} />
					</div>
					<div className='l-productModal__info'>
						<p className='l-productModal__info__product-name'>
							{product?.descriptionShort}
						</p>
						<div className='l-productModal__info__price'>
							{formatter.format(product?.price)}
						</div>
						<p className='l-productModal__info__description'>
							Many desktop publishing packages and web page editors now many desktop publishing
						</p>
						<a className='l-productModal__info__link' href=''>Veja mais detalhes deste produto &gt;</a>
					</div>
				</div>
			</dialog>
			<div className='l-productCard'>
				<div className='l-productCard__image' onClick={() => {
					const modal = document.getElementById(`productModal-${product?.productName}`);
					modal.showModal();
				}}>
					<img src={product?.photo} alt={product?.productName} />
				</div>
				<div className='l-productCard__info'>
					<p className='l-productCard__info__product-name'>
						{product?.descriptionShort}
					</p>
					<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
					<div className='l-productCard__info__price'>
						{formatter.format(product?.price)}
					</div>
					<div className='l-productCard__info__stallments'>
					ou 2x de R$ 49,95 sem juros
					</div>
					<div className='l-productCard__info__frete'>
					Frete grátis
					</div>
				</div>
				<button className='l-productCard__CTA' id='CTA'>COMPRAR</button>
			</div>
		</>
	);
}

export default ProductCard;
