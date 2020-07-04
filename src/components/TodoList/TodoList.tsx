import React from 'react';

import './TodoList.css';
import TodoElement from '../TodoElement/TodoElement';
import Modal from '../Modal/Modal';

interface TodoListProps {
  todoListDB: TodoList;
  modalVisible: boolean;
  closeModal: () => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todoListDB,
  modalVisible,
  closeModal,
}) => {
  return (
    <div className='todoListContainer'>
      {modalVisible ? (
        <>
          <Modal closeModal={closeModal} />
          {todoListDB.map((todo: Todo) => (
            <TodoElement key={todo.id} todo={todo} />
          ))}
        </>
      ) : (
        <>
          {todoListDB.map((todo: Todo) => (
            <TodoElement key={todo.id} todo={todo} />
          ))}
        </>
      )}
    </div>
  );
};

export default TodoList;
