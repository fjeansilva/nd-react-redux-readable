import React from 'react';

const Nav = () => (
  <nav className="nav">
    <ul className="nav__menu">
      <li><a href="/" className="menu__item menu__item--active">Todos</a></li>
      <li><a href="/" className="menu__item">React</a></li>
      <li><a href="/" className="menu__item">Redux</a></li>
      <li><a href="/" className="menu__item">React Native</a></li>
      <li><a href="/" className="menu__item">JavaScript</a></li>
      <li><a href="/" className="menu__item">Udacity</a></li>
    </ul>
  </nav>
);

export default Nav;
