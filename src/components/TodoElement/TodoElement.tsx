import React, { CSSProperties } from 'react';

import './TodoElement.css';

interface TodoElementProps {
  todo: Todo;
}

const TodoElement: React.FC<TodoElementProps> = ({ todo }) => {
  let background;
  switch (todo.priority) {
    case 1:
      background = '#85144b';
      break;
    case 2:
      background = '#2d7e2d';
      break;
    case 3:
      background = '#b1a82a';
      break;
  }

  const colorStyle: CSSProperties = {
    background: `${background}`,
  };

  return (
    <div className='todoContainer' style={colorStyle}>
      <li>
        <label className={todo.complete ? 'complete' : undefined}>
          {/* <input type='checkbox' defaultChecked={todo.complete} /> */}
          {todo.name.toUpperCase()}
        </label>
        <span>{todo.description}</span>
      </li>
    </div>
  );
};

export default TodoElement;
