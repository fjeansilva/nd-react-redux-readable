import { combineReducers } from 'redux';
import categories from '../components/category/reducers';
import postsOrderBy from '../components/orderby/reducers';
import { posts, selectedPost } from '../components/post/reducers';
import ui from './ui';

export default combineReducers({
  categories,
  postsOrderBy,
  selectedPost,
  posts,
  ui,
});
