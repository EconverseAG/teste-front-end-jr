import Modal from 'react-modal'

interface IModal {
    modalIsOpen: boolean,
}

export default function ModalComponent({modalIsOpen}: IModal) {
    
    function handleCloseModal() {
        modalIsOpen = false
        console.log(modalIsOpen)
    }

    return(
        <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
        <h5>TESTE DO MODAL</h5>
        <p>{modalIsOpen}</p>
      <button  onClick={() => handleCloseModal()}>
        Comprar
      </button> 
        
      </Modal>
    )
}