import React from 'react';
import PropTypes from 'prop-types';
import { ORDER_BY_VOTE_SCORE, ORDER_BY_DATE_CREATED } from '../../constants/OrderByTypes';
import OrderByItem from './OrderByItem';

const byVotes = '?orderBy=votes';
const byDate = '?orderBy=date-created';

const OrderBy = ({ location, setOrderBy }) => (
  <ul className="actions__orderby">
    <li className="orderby__item">Ordernar por</li>
    <OrderByItem
      title="votos"
      pathname={location.pathname}
      search={byVotes}
      active={location.search === byVotes}
      handleClick={() => setOrderBy(ORDER_BY_VOTE_SCORE)}
    />
    <OrderByItem
      title="data criação"
      pathname={location.pathname}
      search={byDate}
      active={location.search === byDate}
      handleClick={() => setOrderBy(ORDER_BY_DATE_CREATED)}
    />
  </ul>
);

OrderBy.propTypes = {
  location: PropTypes.object.isRequired,
  setOrderBy: PropTypes.func.isRequired,
};

export default OrderBy;
