import React from 'react';
import { NavLink, Link, Route } from 'react-router-dom';
import OrderByContainer from './orderby/OrderByContainer';

const PageActions = () => (
  <section className="actions">
    <Link to="/new" className="actions__add">
      New post
    </Link>
    <Route
      exact
      path="/"
      component={OrderByContainer}
    />
    <Route
      exact
      path="/:category/:post_id"
      render={() => (
        <ul className="page__actions">
          <li className="page__actions__item page__actions__item--active" style={{ borderRadius: '3px' }}>
            <NavLink className="item item--active" to="/comment">Add Comment</NavLink>
          </li>
        </ul>
      )}
    />
  </section>
);

export default PageActions;
