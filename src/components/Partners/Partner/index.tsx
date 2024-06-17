import React from 'react';
import { Link } from 'react-router-dom';

interface PartnerProps {
    link: string;
    image: string;
    title?: string;
    children: string;
}

const Partner: React.FC<PartnerProps> = ({ link, image, title, children  }) => {
    const defaultTitle = title || 'Parceiros';
    return (
        <div className='partner' style={{ backgroundImage: `linear-gradient(to bottom, transparent, #000), url(${image})` }}>
            <h4 className='title-partner'>{defaultTitle}</h4>
            <p className='text-partner'>{children}</p>
            <Link to={link}>
                <button className='button-partner'>Confira</button>
            </Link>
        </div>
    )

}

export default Partner;
