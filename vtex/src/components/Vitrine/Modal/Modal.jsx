import React from 'react';
import './Modal.css';
import Close from './close.png';

function Modal({isOpen,setModalOpen}) {

  if(isOpen){
    return (
      <div id='background-modal'>
        <div id='Modal'>
          <button id='close' onClick={setModalOpen}><img id='close-image' src={Close} alt=''/></button> 
          <div id='content'>
            <img id='cellImg' src="https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png" alt=''/>
            <div id='celText'>
              <h2 id='cellTitle'>Iphone 11 PRO MAX BRANCO 1</h2>
              <h3 id='cellPrice'>R$ 15 000,00</h3>
              <p id='cellDescription'>Iphone 11 PRO MAX BRANCO 1</p>
              <p id='details'>Veja mais detalhes do produto {'>'} </p>
            </div>
          </div>
        </div>
      </div>
      );
  }

  return null
}

export default Modal;
