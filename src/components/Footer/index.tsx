import React from 'react';

import 'styles/components/footer.sass';

import FooterNavBar from './NavBar';
import Copyright from './Copyright';

const Footer: React.FC = () => {
    return (
        <footer className='footer'>
            <FooterNavBar />
            <Copyright />
        </footer>
    )
}

export default Footer;
