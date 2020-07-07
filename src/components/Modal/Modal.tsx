import React from 'react';

import './Modal.css';

interface ModalProps {
  closeModal: () => void;
  newTodo: Todo;
  setNewTodo: (newTodo: Todo) => void;
  currentLength: number;
}

const Modal: React.FC<ModalProps> = ({
  closeModal,
  newTodo,
  setNewTodo,
  currentLength,
}) => {
  return (
    <div>
      <div className='modalContainer'>
        <form className='modalForm'>
          <input
            placeholder='Title'
            onChange={(e) =>
              setNewTodo({
                ...newTodo,
                id: currentLength + 1,
                name: e.target.value,
              })
            }
          ></input>
          <select name='priorityList' required>
            <option value='default' disabled selected>
              Choose Priority
            </option>
            <option value='top'>Top</option>
            <option value='medium'>Medium</option>
            <option value='low'>Low</option>
          </select>
          <input placeholder='Description'></input>
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
