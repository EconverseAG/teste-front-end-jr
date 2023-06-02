import React from 'react';

import './styles.scss';

import CrownIcon from '~/src/assets/Crown.svg';

function Navigation() {
	return (
		<nav className='l-headerNavigation'>
			<ul>
				<li>
					Todas as categorias
				</li>
				<li>
					Supermercado
				</li>
				<li>
					Livros
				</li>
				<li>
					Moda
				</li>
				<li>
					Lançamentos
				</li>
				<li>
					Ofertas do dia
				</li>
				<li>
					<CrownIcon />
					Assinaturas
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
