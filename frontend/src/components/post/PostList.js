import React from 'react';
import PropTypes from 'prop-types';
import Post from './index';

const PostList = ({ items }) => (
  <div>
    {items.map(item => <Post key={item.id} post={item} />)}
  </div>
);

PostList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default PostList;
