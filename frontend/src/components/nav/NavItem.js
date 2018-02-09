import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';

const NavItem = ({ url, title, location }) => (
  <li>
    <NavLink
      to={url.concat(location.search)}
      className="menu__item"
      activeClassName="menu__item--active"
      isActive={() => location.pathname.replace('/', '') === url}
    >{title}
    </NavLink>
  </li>
);

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(NavItem);
