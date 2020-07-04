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
          <li>
            <span className='topDot'></span>Top Priority
          </li>
          <li>
            <span className='medDot'></span>Medium Priority
          </li>
          <li>
            <span className='lowDot'></span>Low Priority
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
