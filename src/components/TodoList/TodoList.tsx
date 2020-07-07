import React, { useContext } from 'react';

import './TodoList.css';
import TodoElement from '../TodoElement/TodoElement';
import Modal from '../Modal/Modal';
import { TodoContext, RestTodoContext } from '../../context/TodoContext';

interface TodoListProps {
  // todoListDB: TodoList;
  // setTodoListDB: (todoList: TodoList) => void;
  // modalVisible: boolean;
  // closeModal: () => void;
}

const TodoList: React.FC = () => {
  const ctx = useContext(TodoContext);
  const restCtx = useContext(RestTodoContext);

  if (ctx !== null && restCtx !== null) {
    const { modalVisible, closeModal, newTodo, setNewTodo } = restCtx;
    return (
      <div className='todoListContainer'>
        {modalVisible ? (
          <>
            <Modal
              closeModal={closeModal}
              newTodo={newTodo}
              setNewTodo={setNewTodo}
              currentLength={ctx.todoListDB.length}
            />
            {ctx.todoListDB.map((todo: Todo) => (
              <TodoElement key={todo.id} todo={todo} />
            ))}
          </>
        ) : (
          <>
            {ctx.todoListDB.map((todo: Todo) => (
              <TodoElement key={todo.id} todo={todo} />
            ))}
          </>
        )}
      </div>
    );
  }
  return null;
};

export default TodoList;
