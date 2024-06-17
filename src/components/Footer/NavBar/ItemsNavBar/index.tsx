import React from 'react';
import { Link } from 'react-router-dom';

interface ItemsNavProp {
    link: string
    children: string
}

const ItemsNavBar: React.FC<ItemsNavProp> = ({ link, children }) => {
    return (
        <Link to={link}>
            <li className='item-footer'>{children}</li>
        </Link>
    )
}

export default ItemsNavBar;
