import React from 'react';

import './Sidebar.css';
import Logo from './Logo/Logo';

interface SidebarProps {
  isSidebarOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen }) => {
  return (
    <aside className={isSidebarOpen ? 'sidebarOpened' : 'sidebarClosed'}>
      <div className='logo'>
        <Logo />
      </div>
      <nav className='sidebarNav'>
        <ul className='list'>
          <li>Category 1</li>
          <li>Category 2</li>
          <li>Category 3</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
