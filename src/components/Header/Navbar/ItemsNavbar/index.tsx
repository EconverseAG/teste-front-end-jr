import React from 'react';
import { Link } from 'react-router-dom';

interface ItemsNavbarProps {
    link: string;
    children: React.ReactNode;
}

const ItemsNavbar: React.FC<ItemsNavbarProps> = ({ link, children }) => {
    return (
        <li className='item-footer'>
            <Link to={link}>
                {children}
            </Link>
        </li>
    )
}

export default ItemsNavbar;
