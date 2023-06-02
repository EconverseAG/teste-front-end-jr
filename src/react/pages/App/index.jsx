import React from 'react';

import './styles.scss';

import Header from '~/src/react/containers/Header';
import MainContent from '~/src/react/containers/MainContent';
import Footer from '../../containers/Footer';

function App() {
	return (
		<div id='l-app'>
			<Header />
			<MainContent />
			<Footer />
		</div>
	);
}

export default App;
