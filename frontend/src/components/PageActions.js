import React from 'react';
import { Link } from 'react-router-dom';
import OrderByContainer from './orderby/OrderByContainer';

const PageActions = () => (
  <section className="actions">
    <Link to="/new" className="actions__add">
      New post
    </Link>
    <OrderByContainer />
  </section>
);

export default PageActions;
