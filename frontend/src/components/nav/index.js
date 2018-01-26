import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Nav = ({ items }) => (
  <div className="container container-nav">
    <div className="row">
      <div className="col-4 offset-8">
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/posts/category/all">all</NavLink>
          </li>
          {items.map(i => (
            <li key={i.name} className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to={`/posts/category/${i.path}`}>{i.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

Nav.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Nav;