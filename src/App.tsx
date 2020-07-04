import React, { useState, useEffect } from 'react';
import localForage from 'localforage';

import Layout from './Layout/Layout';
import TodoList from './components/TodoList/TodoList';
import './App.css';
import { initialTodoList } from './initialTodoList';

const App: React.FC = () => {
  const [todoListDB, setTodoListDB] = useState<TodoList>([]);
  const [newTodo, setNewTodo] = useState<Todo>({
    id: '',
    name: '',
    description: '',
    priority: 1,
    complete: false,
  });
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    localForage
      .getItem<TodoList>('todoList')
      .then(function (value: TodoList | null) {
        if (!value) {
          localForage
            .setItem<TodoList>('todoList', initialTodoList)
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

  const closeModal = (): void => {
    setModalVisible(false);
  };

  const openModal = (): void => {
    setModalVisible(true);
  };

  return (
    <div className='App'>
      <Layout openModal={openModal}>
        <TodoList
          todoListDB={todoListDB}
          modalVisible={modalVisible}
          closeModal={closeModal}
        />
      </Layout>
    </div>
  );
};

export default App;
