import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_RECEIVE,
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
    case FETCH_COMMENTS_REQUEST:
      return {
        ...state,
        commentList: {
          isFetching: true,
        },
      };
    case FETCH_COMMENTS_RECEIVE:
      return {
        ...state,
        commentList: {
          isFetching: false,
        },
      };
    default:
      return state;
  }
}

export default uiReducer;
