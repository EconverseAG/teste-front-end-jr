import React from 'react';
import { Link } from 'react-router-dom';

interface ItemsProfileProps {
    link: string;
    image: string;
    alt: string;
}
const ItemsProfile: React.FC<ItemsProfileProps> = ({ link, image, alt }) => {
    return (
        <Link to={link}>
            <img src={image} alt={alt} />
        </Link>
    )
}

export default ItemsProfile;
