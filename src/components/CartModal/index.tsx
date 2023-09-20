import { useContext } from "react";
import { createPortal } from "react-dom";
import './styles.scss';
import { Button, Modal } from "../UI";
import { CartContext } from "../../context/CartContext";
import { convertToCurrency } from "../../utils/convertToCurrency";

import minusIcon from '../../assets/icons/minus.svg';
import plusIcon from '../../assets/icons/plus.svg';

export function CartModal() {
  const { getProductData, qtdProduct, addQtdProduct, lessQtdProduct, onCloseModal } = useContext(CartContext);

  const data = getProductData();

  return createPortal(
    <Modal>
      <div className="modal-content">
        {data && (
          <>
            <div className="product-img-modal">
              <img src={data.photo} alt={`image of ${data.productName}`} />
            </div>
            <div className="product-info-modal">
              <h3>{data.productName}</h3>
              <span>{convertToCurrency(data.price)}</span>
              <span>{data.descriptionShort}</span>

              <a href="#">Veja mais detalhes do produto {">"} </a>

              <div className="qtd-product">
                <button title="Add product to cart" type="button" onClick={lessQtdProduct}>
                  <img src={minusIcon} alt="" />
                </button>
                <span>{qtdProduct}</span>
                <button title="Remove product from cart" type="button" onClick={addQtdProduct}>
                  <img src={plusIcon} alt="" />
                </button>
              </div>

              <div className="button-container-modal">
                <Button
                  text="Comprar"
                  onClick={onCloseModal}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </Modal>,
    document.getElementById("modal")!
  )
}
