import React from 'react';
import LogoMesto from '../LogoMesto.svg';

function Header() {
  return (
    <header className="header">
        <img
          src={LogoMesto} className="header__logo" alt="логотип"
        />
      </header>
  );
}
  
export default Header;