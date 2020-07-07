import React, { useState } from 'react';

import './Layout.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Vector from './Vector.svg';

const Layout: React.FC = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className='layoutContainer'>
      <div className='sideContainer'>
        <div className='sideLine'></div>
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <div className='scroller'>
          <button
            className='scrollBtn'
            type='button'
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <img
              src={Vector}
              alt='vector'
              className={isSidebarOpen ? 'arrowLeft' : 'arrowRight'}
            />
          </button>
        </div>
      </div>
      <div className='contentContainer'>
        <Header />
        <main className='mainContainer'>{children}</main>
        <footer style={{ height: '5rem' }}></footer>
      </div>
    </div>
  );
};

export default Layout;
