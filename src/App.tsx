import React from 'react';

import Layout from './Layout/Layout';
import TodoList from './components/TodoList/TodoList';
import './App.css';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Layout>
        <TodoList />
      </Layout>
    </div>
  );
};

export default App;
