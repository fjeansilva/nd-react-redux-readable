import React from 'react';
import OrderByContainer from '../orderby/OrderByContainer';

const Menu = () => (
  <section className="actions">
    <a href="/" className="actions__add">New post</a>
    <OrderByContainer />
  </section>
);

export default Menu;
