import React from 'react';

import './styles.scss';

function Newsletter() {
	return (
		<section className='l-newsletter'>
			<h1 className='l-newsletter__title'>
				Cadastre-se e receba nossas<br />
				<strong>Novidades e promoções</strong>
			</h1>
			<p className='l-newsletter__details'>
				Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum
			</p>
			<form className='l-newsletter__form'>
				<input type="text" placeholder='SEU E-MAIL' />
				<button type="submit">OK</button>
			</form>
		</section>
	);
}

export default Newsletter;
