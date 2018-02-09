import {
  SET_POST_ORDER_BY,
} from '../../constants/OrderByTypes';

function orderPosts(state = 'BY_VOTES', action) {
  switch (action.type) {
    case SET_POST_ORDER_BY:
      return action.order;
    default:
      return state;
  }
}

export default orderPosts;
