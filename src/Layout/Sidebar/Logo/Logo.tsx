import React from 'react';

import './Logo.css';
import logo from './Logo.svg';

const Logo: React.FC = () => (
  <div className='logoContainer'>
    <img className='logo' src={logo} alt='TodoLogo' />
  </div>
);

export default Logo;
