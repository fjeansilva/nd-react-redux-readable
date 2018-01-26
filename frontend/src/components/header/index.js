import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="container header">
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to="/">
        <i className="fa fa-optin-monster logo" aria-hidden="true"></i>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/posts/new">Adicionar novo post</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Header;
