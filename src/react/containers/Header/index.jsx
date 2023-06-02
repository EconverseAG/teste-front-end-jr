import React from 'react';

import './styles.scss';

import VtexLogo from '~/src/assets/vtex_logo.svg';
import SearchIcon from '~/src/assets/MagnifyingGlass.svg';
import OrdersIcon from '~/src/assets/Orders.svg';
import FavoritesIcon from '~/src/assets/Favorites.svg';
import AccountIcon from '~/src/assets/Account.svg';
import MinicartIcon from '~/src/assets/Minicart.svg';

import InfoHeader from './components/InfoHeader';
import Navigation from './components/Navigation';

function Header() {
	return (
		<>
			<InfoHeader />
			<header className='l-header'>
				<VtexLogo className='l-header_mainLogo'/>
				<div className='l-header__searchBox'>
					<input type='text' name='Pesquisa' placeholder='O que você está buscando?'/>
					<SearchIcon />
				</div>
				<div className='l-header__actionButtons'>
					<ul>
						<li>
							<OrdersIcon />
						</li>
						<li>
							<FavoritesIcon />
						</li>
						<li>
							<AccountIcon />
						</li>
						<li>
							<MinicartIcon />
						</li>
					</ul>
				</div>
			</header>
			<Navigation />
		</>
	);
}

export default Header;
