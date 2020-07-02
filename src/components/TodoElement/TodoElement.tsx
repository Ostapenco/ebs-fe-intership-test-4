import React from 'react';

import './TodoElement.css';

interface TodoElementProps {
  todo: Todo;
}

const TodoElement: React.FC<TodoElementProps> = ({ todo }) => {
  console.log(todo);

  return (
    <div>
      <li>
        <label className={todo.complete ? 'complete' : undefined}>
          <input type='checkbox' defaultChecked={todo.complete} />
          {todo.name}
        </label>
      </li>
    </div>
  );
};

export default TodoElement;
