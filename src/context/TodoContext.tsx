import React, { useState, createContext, useEffect } from 'react';
import localForage from 'localforage';

// type ContextProps = {
//   todoListDB: TodoList;
//   setTodoListDB: (todoList: TodoList) => void;
// };

type Props = {
  children: React.ReactNode;
};

const initialTodoList = [
  {
    id: 1,
    name: 'Create Todo project',
    description: `It's due to complete this task ASAP`,
    priority: 1,
    complete: false,
  },
  {
    id: 2,
    name: 'Run 5km, please',
    description: `Important for current week`,
    priority: 2,
    complete: true,
  },
  {
    id: 3,
    name: 'Smile and go on',
    description: `Always helps`,
    priority: 1,
    complete: false,
  },
  {
    id: 4,
    name: 'Drink water - 2 liters',
    description: `Doctors recommend`,
    priority: 1,
    complete: false,
  },
  {
    id: 5,
    name: 'Eat something',
    description: `Doctors recommend as well`,
    priority: 2,
    complete: true,
  },
  {
    id: 6,
    name: 'Read a book',
    description: `Pick an interesting one`,
    priority: 2,
    complete: false,
  },
  {
    id: 7,
    name: 'Learn Typescript',
    description: `Otherwise how will you create your Todo project`,
    priority: 1,
    complete: false,
  },
  {
    id: 8,
    name: 'Eat some other thing',
    description: `Yes, need to eat not only once a day`,
    priority: 3,
    complete: true,
  },
  {
    id: 9,
    name: 'Read a another book',
    description: `Become better every day`,
    priority: 3,
    complete: false,
  },
];

export const TodoContext = createContext<ContextProps | null>(null);

export const RestTodoContext = createContext<RestContextProps | null>(null);

export const TodoProvider = ({ children }: Props) => {
  const [todoListDB, setTodoListDB] = useState<TodoList>([]);
  const [newTodo, setNewTodo] = useState<Todo>({
    id: initialTodoList.length + 1,
    name: '',
    description: '',
    priority: 1,
    complete: false,
  });
  console.log('TodoProvider -> newTodo', newTodo);
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
    <TodoContext.Provider value={{ todoListDB, setTodoListDB }}>
      <RestTodoContext.Provider
        value={{
          openModal,
          closeModal,
          modalVisible,
          setModalVisible,
          newTodo,
          setNewTodo,
        }}
      >
        {children}
      </RestTodoContext.Provider>
    </TodoContext.Provider>
  );
};

//useMemo

//creat another context.. for 1 that changes often and another one //// with useMemo?

//throw error if context is null???
