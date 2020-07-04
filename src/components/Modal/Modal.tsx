import React from 'react';

import './Modal.css';

interface ModalProps {
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  return (
    <div>
      <div className='modalContainer'>
        <form className='modalForm'>
          <input placeholder='Title'></input>
          <input placeholder='Priority'></input>
          <input placeholder='Comments'></input>
          <button type='button' className='modalButton'>
            Submit
          </button>
        </form>
      </div>
      <div className='bg' onClick={closeModal} />
    </div>
  );
};

export default Modal;
