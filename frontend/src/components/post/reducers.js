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
      const postsList = state.byId;
      postsList[action.post.id].voteScore = action.post.voteScore;
      return {
        ...state,
        byId: postsList,
      };
    }
    default:
      return state;
  }
}

export function selectedPost(state = {}, action) {
  switch (action.type) {
    case GET_POST:
      return action.post;
    default:
      return state;
  }
}
