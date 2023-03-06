import React from 'react';
import './Modal.css';
import Close from './close.png';

function Modal({isOpen,setModalOpen}) {

  if(isOpen){
    return (
      <div id='background-modal'>
        <div id='Modal'>
         <button id='close' onClick={setModalOpen}><img id='close-image' src={Close} alt=''/></button> 
        </div>
      </div>
      );
  }

  return null
}

export default Modal;
