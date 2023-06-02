import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';

import App from '~/src/react/pages/App';

function react() {

	const container = document.getElementById('root');
	const root = createRoot(container);

	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	);
}

export default react;
