import React, { useEffect, useState } from 'react';

import './styles.scss';

import Slider from 'react-slick';

import axios from 'axios';

import ProductCard from './ProductCard/index.jsx';

import PrevArrow from '~/src/assets/PrevArrow.svg';
import NextArrow from '~/src/assets/NextArrow.svg';

function SampleNextArrow(props) {
	const { className, onClick } = props;
	return (
		<NextArrow
			className={className}
			style={{ 
				width: '20px',
				height: '34px',
			}}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props) {
	const { className, onClick } = props;
	return (
		<PrevArrow
			className={className}
			style={{ 
				width: '20px',
				height: '34px',
			}}
			onClick={onClick}
		/>
	);
}

function RelatedShowcase(props) {
	const sliderSettings = {
		dots: false,
		infinite: true,
		lazyLoad: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 2,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />
	};

	const [showcaseItens, setShowcaseItens] = useState();

	const api = axios.create();

	useEffect(() => {
		async function getItens() {
			try {
				const response = await api.get('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json', {
					headers: {
						'Content-Type': 'application/json',
					}
				});

				setShowcaseItens(response.data);
			}
			catch (err) {
				console.log(err);
			}
		}

		if (!showcaseItens) {
			getItens();
		}
	}, [setShowcaseItens, showcaseItens]);

	return (
		<div className='l-relatedShowcase'>
			<h1 className='l-relatedShowcase__title'>
				<span>Produtos relacionados</span>
			</h1>
			{props.filters ? <div className='l-relatedShowcase__filters'>
				<ul>
					<li>
						Celular
					</li>
					<li>
						Acessórios
					</li>
					<li>
						Tablets
					</li>
					<li>
						Notebooks
					</li>
					<li>
						TVs
					</li>
					<li>
						Ver todos
					</li>
				</ul>
			</div> : <div className='l-relatedShowcase__see-all'>Ver todos</div>}

			<div className='l-relatedShowcase__carousel'>
				<Slider {...sliderSettings}>
					{showcaseItens?.products.flat().map((item, index) => {
						return (
							<ProductCard product={item} key={index++}/>
						);
					})}
				</Slider>
			</div>
		</div>
	);
}

export default RelatedShowcase;
