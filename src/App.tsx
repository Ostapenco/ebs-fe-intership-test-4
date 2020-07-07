import React from 'react';

import Layout from './Layout/Layout';
import TodoList from './components/TodoList/TodoList';
import './App.css';
import { TodoProvider } from './context/TodoContext';

const App: React.FC = () => {
  return (
    <TodoProvider>
      <div className='App'>
        <Layout>
          <TodoList />
        </Layout>
      </div>
    </TodoProvider>
  );
};

export default App;
