import { combineReducers } from 'redux';
import categoryReducer from '../components/category/reducers';
import postOrderReducer from '../components/orderby/reducers';

export default combineReducers({
  categories: categoryReducer,
  postsOrder: postOrderReducer,
});
