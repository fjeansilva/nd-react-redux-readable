import React from 'react';
import PropTypes from 'prop-types';
import NavItem from './NavItem';

const Nav = ({ items }) => (
  <nav className="nav">
    <ul className="nav__menu">
      {items.map(i => <NavItem key={i.path} title={i.name} url={i.path} />)}
    </ul>
  </nav>
);

Nav.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Nav;
