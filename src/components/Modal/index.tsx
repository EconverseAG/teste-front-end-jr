import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import 'styles/components/modalProduct.sass'
import { formatPrice } from 'utils/utils';

import { Product } from 'components/Shelf01/Product';

interface ModalProps {
    product: Product;
    closeModal: () => void;
}

const ModalProduct: React.FC<ModalProps> = ({ product, closeModal }) => {

    const [count, setCount] = useState(0);
    const discountPrice = product.price - (product.price / 10)

    return (
        <section className='modal-product'>
            <div className='modal-content'>
                <button className='close-button' onClick={closeModal}>&times;</button>
                <div className='modal-image'>
                    <img src={product.photo} alt={product.productName} />
                </div>
                <div className='about-product'>
                    <h4 className='title-product'>{product.productName}</h4>
                    <p className='price-product'>{formatPrice(discountPrice)}</p>
                    <p className='description-product'>Many desktop publishing packages and web page editors now many desktop publishing</p>
                    <Link to={`/${product.productName}`}>
                        <p className='details-product'>Veja mais detalhes do produto &#10095;</p>
                    </Link>
                    <div className='count-product'>
                        <button onClick={() => setCount(count - 1)} disabled={count === 0}>-</button>
                        <p>{count}</p>
                        <button onClick={() => setCount(count + 1)} disabled={count > 19}>+</button>
                    </div>
                    <Link to={`/${product.productName}`}>
                        <button className='buy-button'>Comprar</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ModalProduct;
