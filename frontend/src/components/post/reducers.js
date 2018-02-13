import {
  FETCH_POSTS_RECEIVE,
} from '../../constants/ActionsTypes';

function postReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS_RECEIVE:
      return {
        ...state,
        byId: action.posts.reduce((acc, curr) => ({ ...acc, [curr.id]: curr }), {}),
        allIds: action.posts.map(p => p.id),
      };
    default:
      return state;
  }
}

export default postReducer;
