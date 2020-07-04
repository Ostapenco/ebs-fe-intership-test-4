import React from 'react';

import './Header.css';
import Search from './Search/Search';

interface HeaderProps {
  openModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ openModal }) => (
  <header className='theHeader'>
    <nav className='nav'>
      <Search openModal={openModal} />
    </nav>
  </header>
);

export default Header;
