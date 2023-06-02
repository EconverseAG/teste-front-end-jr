import React from 'react';

import './styles.scss';

function Categories() {
	const tecnologiaUrl = new URL('~/src/assets/Tecnologia.png?as=webp', import.meta.url);
	const supermercadoUrl = new URL('~/src/assets/Supermercado.png?as=webp', import.meta.url);
	const bebidasUrl = new URL('~/src/assets/Bebidas.png?as=webp', import.meta.url);
	const ferramentasUrl = new URL('~/src/assets/Ferramentas.png?as=webp', import.meta.url);
	const saudeUrl = new URL('~/src/assets/Saude.png?as=webp', import.meta.url);
	const esportesUrl = new URL('~/src/assets/Esportes.png?as=webp', import.meta.url);
	const modaUrl = new URL('~/src/assets/Moda.png?as=webp', import.meta.url);

	return (
		<div className='l-categories'>
			<ul>
				<li>
					<div>
						<img src={tecnologiaUrl} alt='' />
					</div>
					Tecnologia
				</li>
				<li>
					<div>
						<img src={supermercadoUrl} alt='' />
					</div>
					Supermercado
				</li>
				<li>
					<div>
						<img src={bebidasUrl} alt='' />
					</div>
					Bebidas
				</li>
				<li>
					<div>
						<img src={ferramentasUrl} alt='' />
					</div>
					Ferramentas
				</li>
				<li>
					<div>
						<img src={saudeUrl} alt='' />
					</div>
					Saúde
				</li>
				<li>
					<div>
						<img src={esportesUrl} alt='' />
					</div>
					Esportes e Fitness
				</li>
				<li>
					<div>
						<img src={modaUrl} alt='' />
					</div>
					Moda
				</li>
			</ul>
		</div>
	);
}

export default Categories;
