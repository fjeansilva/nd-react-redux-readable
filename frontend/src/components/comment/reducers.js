import {
  FETCH_COMMENTS_RECEIVE,
} from '../../constants/ActionsTypes';

export default function comments(state = {}, action) {
  switch (action.type) {
    case FETCH_COMMENTS_RECEIVE:
      return {
        ...state,
        byId: action.comments.reduce((acc, curr) => ({ ...acc, [curr.id]: curr }), {}),
        allIds: action.comments.map(p => p.id),
      };
    default:
      return state;
  }
}

