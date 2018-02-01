import React from 'react';

const MenuActions = () => (
  <section className="actions">
    <a href="/" className="actions__add">Novo post</a>
    <ul className="actions__orderby">
      <li className="orderby__item">Ordernar por</li>
      <li className="orderby__item orderby__item--active">
        <a href="/" className="item item--active">Votos</a>
      </li>
      <li className="orderby__item"><a href="/" className="item">Data criação</a></li>
    </ul>
  </section>
);

export default MenuActions;
