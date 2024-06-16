import React from 'react';

interface ItemsTopBarProps {
    image: string;
    alt: string;
    children: React.ReactNode;
}

const ItemsTopBar: React.FC<ItemsTopBarProps> = ({ image, alt, children }) => {
    return (
        <div className='items-top-bar'>
            <img src={image} alt={alt} className='image-top-bar' />
            <p className='text-top-bar'>{children}</p>
        </div>
    )
}

export default ItemsTopBar;
