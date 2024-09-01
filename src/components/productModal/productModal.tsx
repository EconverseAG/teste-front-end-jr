import React, { useState } from 'react';
import '../../styles/styles.scss';

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface ModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const [quantity, setQuantity] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(product.price);

  const increaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setTotalPrice(product.price * newQuantity);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setTotalPrice(product.price * newQuantity);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal__content">
          <figure className="modal__image-container">
            <img src={product.photo} alt="Imagem do Produto" className="modal__image"></img>
          </figure>
          <button className="modal__close-button" aria-label="Close" onClick={onClose}>
            &times;
          </button>
          <div className="modal__details">
            <h1 className="modal__title">{product.productName}</h1>
            <p id="modal-price" className="modal__price">R$ {totalPrice.toFixed(2)}</p>
            <p className="modal__description">Many desktop publishing packages and web page editors now many desktop publishing</p>
            <a href="#" className="modal__link">Veja mais detalhes do produto &gt;</a>
            <div className="modal__quantity">
              <button className="modal__quantity-button" aria-label="Diminuir quantidade" onClick={decreaseQuantity}>
                -
              </button>
              <input
                id="quantity-input"
                type="number"
                value={quantity}
                className="modal__quantity-input"
                aria-label="Quantidade do produto"
                readOnly
              />
              <button className="modal__quantity-button" aria-label="Aumentar quantidade" onClick={increaseQuantity}>
                +
              </button>
            </div>
            <button className="modal__buy-button">COMPRAR</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
