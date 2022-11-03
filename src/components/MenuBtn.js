import './MenuBtn.css';
import React, { useState } from 'react';

const MenuBtn = () => {
  let [ menuOpen, setMenuOpen ] = useState(false);
  const clickMenu = () => {
    const menuBtn = document.querySelector('.menu-btn');
    menuBtn.addEventListener('click', () => {
      if(!menuOpen) {
        menuBtn.classList.add('open');
        setMenuOpen(true);
      } else {
        menuBtn.classList.remove('open');
        setMenuOpen(false);
      }
    })
  }
  return (
    <div className="menu-btn" onClick={clickMenu}>
        <div className="menu-btn__burger"></div>
    </div>
  )
}

export default MenuBtn;