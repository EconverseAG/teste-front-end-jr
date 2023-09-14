import Modal from "react-modal";

import styles from "./ModalComponent.module.scss";

import closeModal from "../../../assets/close.svg";
import iphone from "../../../assets/iphone.png";
import minus from "../../../assets/minus.svg";
import plus from "../../../assets/plus.svg";

interface IModal {
  modalIsOpen: boolean;
  onClick: () => void;
  onRequestClose: () => void;
}

export default function ModalComponent({
  modalIsOpen,
  onClick,
  onRequestClose,
}: IModal) {

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      style={{overlay: {background: 'rgba(0, 0, 0, 0.54)', zIndex: 6, overflowY: "hidden"}}}
    >
      <div className={styles.modalContainer}>
        <header className={styles.modalHeader}>
          <button className={styles.modalHeaderClose} onClick={onClick}>
            <img src={closeModal} alt="Fechar modal" />
          </button>
        </header>
        <div className={styles.modalContent}>
          <img src={iphone} alt="Image do dispositivo" className={styles.modalContentImage} />
          <div className={styles.modalContentText}>
            <h1 className={styles.modalContentPrincipalTitle}>Lorem ipsum dolor sit amet</h1>
            <h2 className={styles.modalContentPriceText}>R$ 1.499,90</h2>
            <p className={styles.modalContentDescription}>
              Many desktop publishing packages and web page editors now many
              desktop publishing
            </p>
            <h3 className={styles.modalContentMoreDetails}>Veja mais detalhes do produto &gt;</h3>
            <div className={styles.modalButtonQuantity}>
              <button className={styles.minus}>
                <img src={minus} alt="Reduzir" />
              </button>
              <p className={styles.number}>1</p>
              <button className={styles.plus}>
                <img src={plus} alt="Adicionar" />
              </button>
            </div>
            <button onClick={onClick} className={styles.modalButton}>Comprar</button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
