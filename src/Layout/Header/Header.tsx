import React from 'react';

import './Header.css';
import Search from './Search/Search';

const Header: React.FC = () => (
  <header className='theHeader'>
    <nav className='nav'>
      <Search />
    </nav>
  </header>
);

export default Header;
