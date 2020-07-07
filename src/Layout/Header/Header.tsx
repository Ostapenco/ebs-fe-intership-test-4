import React, { useContext } from 'react';

import './Header.css';
import Search from './Search/Search';
import { RestTodoContext } from '../../context/TodoContext';

// interface HeaderProps {
//   openModal: () => void;
// }

const Header: React.FC = () => {
  const ctx = useContext(RestTodoContext);

  if (ctx !== null) {
    return (
      <header className='theHeader'>
        <nav className='nav'>
          <Search openModal={ctx.openModal} />
        </nav>
      </header>
    );
  }
  return null;
};

export default Header;
