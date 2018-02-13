import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_RECEIVE,
  FETCH_CATEGORIES_FAILURE,
} from '../../constants/ActionsTypes';
import { getCategories } from '../../utils/ReadableAPI';

export default function fetchCategories() {
  return (dispatch) => {
    dispatch({ type: FETCH_CATEGORIES_REQUEST });
    return getCategories()
      .then(data => dispatch({ type: FETCH_CATEGORIES_RECEIVE, payload: data }))
      .catch(err => dispatch({ type: FETCH_CATEGORIES_FAILURE, err }));
  };
}

