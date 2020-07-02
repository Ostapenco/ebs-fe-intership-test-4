import React, { useState, useEffect } from 'react';
import localForage from 'localforage';

import './TodoList.css';
import TodoElement from '../TodoElement/TodoElement';

const todoList: TodoList = [
  { name: 'Create Todo project', complete: false },
  { name: 'Run 5km', complete: true },
  { name: 'Smile and go on', complete: false },
  { name: 'Drink water', complete: false },
  { name: 'Eat something', complete: true },
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
        return console.error(err), 'Oops! Something went wrong';
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
    <div>
      {todoListDB.map((todo: Todo) => (
        <TodoElement key={todo.name} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
