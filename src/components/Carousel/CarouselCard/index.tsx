import Modal from 'react-modal'
import { useState } from 'react'

import styles from './CarouselCard.module.scss'

import ModalComponent from '../ModalComponent'
import IProduct from '../../../types/IProduct'

Modal.setAppElement('#root')

interface ICarouselCard {
  product: IProduct
}

export default function CardCarousel({product}: ICarouselCard) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  
  function handleOpenModal() {
    setModalIsOpen(true)
    console.log('clicou')
  }

  function handleCloseModal() {
    setModalIsOpen(false)
    console.log(modalIsOpen)
  }

  const convertPrice = product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

  return (
    <div className={styles.card}>
      <img src={product.photo} alt={product.descriptionShort} className={styles.cardImage} />
      <h3 className={styles.cardName}>{product.productName}</h3>
      <div className={styles.prices}>
        <p className={styles.salePrice}>R$ 30,90</p>
        <p className={styles.fullPrice}><strong>{convertPrice}</strong></p>
      </div>
      <p className={styles.cardPortion}>ou 2x de R$ 49,95 sem juros</p>
      <p className={styles.cardFreight}>Frete grátis</p>
      <button className={styles.cardButton} onClick={() => handleOpenModal()}>
        Comprar
      </button> 
      <ModalComponent modalIsOpen={modalIsOpen} onClick={() => handleCloseModal()} onRequestClose={handleCloseModal} product={product}/>
    </div>
  )
}
