import {
  GET_POST,
  FETCH_POSTS_RECEIVE,
  POST_VOTE_SCORE,
} from '../../constants/ActionsTypes';

export function posts(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS_RECEIVE:
      return {
        ...state,
        byId: action.posts.reduce((acc, curr) => ({ ...acc, [curr.id]: curr }), {}),
        allIds: action.posts.map(p => p.id),
      };
    case POST_VOTE_SCORE: {
      if (state.byId) {
        const postsList = state.byId;
        postsList[action.post.id].voteScore = action.post.voteScore;
        return {
          ...state,
          byId: postsList,
        };
      }
      return state;
    }
    default:
      return state;
  }
}

export function selectedPost(state = {}, action) {
  switch (action.type) {
    case GET_POST:
      return action.post;
    case POST_VOTE_SCORE: {
      if (state.id) {
        if (state.id === action.post.id) {
          const post = state;
          post.voteScore = action.post.voteScore;
          return post;
        }
      }
      return state;
    }
    default:
      return state;
  }
}
