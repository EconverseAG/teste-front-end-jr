import React from 'react';
import { Link } from 'react-router-dom';

interface ProductProps {
    link: string;
    image: string;
    title?: string;
    children: string;
}

const Product: React.FC<ProductProps> = ({ link, image, title, children  }) => {
    const defaultTitle = title || 'Produtos';
    return (
        <div className='product' style={{ backgroundImage: `linear-gradient(to bottom, transparent, #000), url(${image})` }}>
            <h4 className='title-product'>{defaultTitle}</h4>
            <p className='text-product'>{children}</p>
            <Link to={link}>
                <button className='button-product'>Confira</button>
            </Link>
        </div>
    )

}

export default Product;
