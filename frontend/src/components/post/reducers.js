import {
  FETCH_POSTS_RECEIVE,
  POST_VOTE_SCORE,
} from '../../constants/ActionsTypes';

function postReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS_RECEIVE:
      return {
        ...state,
        byId: action.posts.reduce((acc, curr) => ({ ...acc, [curr.id]: curr }), {}),
        allIds: action.posts.map(p => p.id),
      };
    case POST_VOTE_SCORE: {
      const posts = state.byId;
      posts[action.post.id].voteScore = action.post.voteScore;
      return {
        ...state,
        byId: posts,
      };
    }
    default:
      return state;
  }
}

export default postReducer;
