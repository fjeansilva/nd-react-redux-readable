import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_RECEIVE,
  FETCH_POSTS_FAILURE,
  POST_VOTE_SCORE,
} from '../../constants/ActionsTypes';
import { getPosts, vote } from '../../utils/ReadableAPI';

export function fetchPosts(category) {
  return (dispatch) => {
    dispatch({ type: FETCH_POSTS_REQUEST });
    return getPosts(category)
      .then(data => dispatch({ type: FETCH_POSTS_RECEIVE, posts: data }))
      .catch(err => dispatch({ type: FETCH_POSTS_FAILURE, err }));
  };
}

export function votePost(id, option) {
  return (dispatch) => {
    vote(id, option)
      .then(data => dispatch({ type: POST_VOTE_SCORE, post: data }))
      .catch(err => dispatch({ type: FETCH_POSTS_FAILURE, err }));
  };
}
