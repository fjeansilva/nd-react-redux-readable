import React from 'react';
import OrderByContainer from '../orderby/OrderByContainer';

const MenuActions = () => (
  <section className="actions">
    <a href="/" className="actions__add">Novo post</a>
    <OrderByContainer />
  </section>
);

export default MenuActions;
