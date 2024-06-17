import React from 'react';
import 'styles/components/partners.sass'

import backgroundBanner from 'images/Partners/Background-banner.png';
import Partner from 'components/Partners/Partner';

const Partners: React.FC = () => {
    return (
        <section className='partners'>
            <Partner
                link='/'
                image={backgroundBanner}
                title='Parceiros'
            >
                Lorem ipsum dolor sit amet, consectetur
            </Partner>
            <Partner
                link='/'
                image={backgroundBanner}
            >
                Lorem ipsum dolor sit amet, consectetur
            </Partner>
        </section>
    )
}

export default Partners;
