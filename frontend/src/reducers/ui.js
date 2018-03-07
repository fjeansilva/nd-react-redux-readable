import {
  FETCH_POST_REQUEST,
  FETCH_POST_RECEIVE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_RECEIVE,
} from '../constants/ActionsTypes';

const initialState = {
  postList: {
    isFetching: false,
  },
};

function uiReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        postList: {
          isFetching: true,
        },
      };
    case FETCH_POSTS_RECEIVE:
      return {
        ...state,
        postList: {
          isFetching: false,
        },
      };
    default:
      return state;
  }
}

export default uiReducer;
