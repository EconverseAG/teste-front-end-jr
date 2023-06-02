import React from 'react';

import './styles.scss';

import MainBanner from './components/MainBanner';
import Categories from './components/Categories';
import RelatedShowcase from './components/RelatedShowcase';
import Partners from './components/Partners';
import Products from './components/Products';
import Brands from './components/Brands';

function MainContent() {
	return (
		<main>
			<MainBanner />
			<Categories />
			<RelatedShowcase filters={true}/>
			<Partners />
			<RelatedShowcase filters={false}/>
			<Products />
			<Brands />
			<RelatedShowcase filters={false}/>
		</main>
	);
}

export default MainContent;
