import { useContext } from 'react';
import { convertToCurrency } from '../../../utils/convertToCurrency';
import { Button } from '../Button';
import './styles.scss';
import { CartContext } from '../../../context/CartContext';

interface ProductCardProps {
  title: string;
  imgUrl: string;
  price: number;
}

export function ProductCard({
  title,
  imgUrl,
  price
}: ProductCardProps) {
  const { onOpenModal, getProductName } = useContext(CartContext);

  function handleOpenModal() {
    getProductName(title);
    onOpenModal();
  }

  return (
    <div className="card-container">
      <div className="card-img-container">
        <img src={imgUrl} alt="" />
      </div>
      <p>{title}</p>

      <div className="card-price">
        <span className='last-price'>{convertToCurrency(price)}</span>
        <span className='current-price'>{convertToCurrency(price - 225)}</span>
      </div>
      <div className="card-product-info">
        <span>ou 2x de {convertToCurrency(price / 2)} sem juros</span>
        <span className='installments'>Frete gratis</span>
      </div>

      <div className="card-button-container">
        <Button
          text="Comprar"
          onClick={handleOpenModal}
        />
      </div>
    </div>
  )
}
