import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_RECEIVE,
  FETCH_COMMENTS_FAILURE,
} from '../../constants/ActionsTypes';
import { getComments } from '../../utils/ReadableAPI';

export function fetchComments(id) {
  return (dispatch) => {
    dispatch({ type: FETCH_COMMENTS_REQUEST });

    getComments(id)
      .then(data => dispatch({ type: FETCH_COMMENTS_RECEIVE, comments: data }))
      .catch(err => dispatch({ type: FETCH_COMMENTS_FAILURE, error: err }));
  };
}

export function removeComment(id) {
  console.log('id', id);
}
