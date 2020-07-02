import React, { useState, useEffect } from 'react';
import localForage from 'localforage';

import './TodoList.css';
import TodoElement from '../TodoElement/TodoElement';

const todoList: TodoList = [
  { id: '1', name: 'Create Todo project', complete: false },
  { id: '2', name: 'Run 5km, please', complete: true },
  { id: '3', name: 'Smile and go on', complete: false },
  { id: '4', name: 'Drink water - 2 liters', complete: false },
  { id: '5', name: 'Eat something', complete: true },
  { id: '6', name: 'Read a book', complete: false },
  { id: '7', name: 'Drink water - 2 liters', complete: false },
  { id: '8', name: 'Eat something', complete: true },
  { id: '9', name: 'Read a book', complete: false },
];

const TodoList: React.FC = () => {
  const [todoListDB, setTodoListDB] = useState<TodoList>([]);

  useEffect(() => {
    localForage
      .getItem<TodoList>('todoList')
      .then(function (value: TodoList | null) {
        if (!value) {
          localForage
            .setItem<TodoList>('todoList', todoList)
            .then(function (data: TodoList) {
              setTodoListDB(data);
            })
            .catch((err) => console.error(err));

          return;
        }
        setTodoListDB(value);
        return;
      })
      .catch((err) => {
        'Oops! Something went wrong';
        return console.error(err);
      });
  }, []);

  useEffect(() => {
    return () => {
      if (todoListDB.length) {
        localForage.setItem<TodoList>('todoList', todoListDB);
      }
    };
  }, [todoListDB]);

  return (
    <div className='todoListContainer'>
      {todoListDB.map((todo: Todo) => (
        <TodoElement key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
