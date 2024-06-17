import React from 'react';

import econverse from 'images/Footer/econverse.png'
import vtex from 'images/Footer/vtex.png'

const Copyright: React.FC = () => {
    return (
        <div className='copyright'>
            <p>
            Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos. <br />
            É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.
            </p>
            <div className='copyright-images'>
                <img src={econverse} alt='Econverse' />
                <img src={vtex} alt='Vtex' />
            </div>
        </div>
    )
}

export default Copyright;
