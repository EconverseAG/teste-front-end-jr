import { ReactNode, useContext } from "react";

import './styles.scss';
import '../../../styles/theme.scss';

import closeIcon from '../../../assets/icons/close.svg'
import { CartContext } from "../../../context/CartContext";

interface ModalProps {
  children: ReactNode
}

export function Modal({ children }: ModalProps) {
  const { isOpen, onCloseModal } = useContext(CartContext)

  return (
    <>
      {isOpen && (
        <div className="overlay">
          <div className="modal-container">
            <div className="modal-wrapper">
              <button title="Close modal" type="button" onClick={onCloseModal} className="close">
                <img src={closeIcon} alt="" />
              </button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
