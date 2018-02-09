import {
  FETCH_CATEGORIES_RECEIVE,
} from '../../constants/ActionsTypes';

const categories = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_RECEIVE:
      return {
        ...state,
        byId: action.payload.categories.reduce((acc, curr) => ({ ...acc, [curr.path]: curr }), {}),
        allIds: action.payload.categories.map(c => c.path),
      };
    default:
      return state;
  }
};

export default categories;
