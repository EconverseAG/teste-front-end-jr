import React from 'react';

import { Product } from '../Product';
import { formatPrice } from 'utils/utils';

interface CardProductProps {
    product: Product;
    openModal: (product: Product) => void;
}

const CardProduct: React.FC<CardProductProps> = ({ product, openModal }) => {

    const price = product.price
    const discountPrice = price - (price / 10)

    const installment = discountPrice / 2

    return (
        <div className='card-product'>
            <img src={product.photo} alt={product.productName} />
            <h4 className='title-product'>{product.productName}</h4>
            <p className='price'>{formatPrice(price)}</p>
            <p className='discount-price'>{formatPrice(discountPrice)}</p>
            <p className='installment'>ou 2x de {formatPrice(installment)} sem juros</p>

            {/* Frete grátis acima de R$10000,00 */}
            {discountPrice <= 10000 ?
                <p className='paid-shipping'>Frete R$10,00</p>
            :
                <p className='free-shipping'>Frete grátis</p>
            }
            <button className='buy-button' onClick={() => openModal(product)}>Comprar</button>
        </div>
    )
}

export default CardProduct;
