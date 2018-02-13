import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_RECEIVE,
  FETCH_POSTS_FAILURE,
} from '../../constants/ActionsTypes';
import { getPosts } from '../../utils/ReadableAPI';

export default function fetchPosts(category) {
  return (dispatch) => {
    dispatch({ type: FETCH_POSTS_REQUEST });
    return getPosts(category)
      .then(data => dispatch({ type: FETCH_POSTS_RECEIVE, posts: data }))
      .catch(err => dispatch({ type: FETCH_POSTS_FAILURE, err }));
  };
}
