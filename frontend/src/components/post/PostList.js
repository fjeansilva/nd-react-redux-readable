import React from 'react';
import PropTypes from 'prop-types';
import Post from './index';

const PostList = ({ items, updateVote }) => (
  <section>
    {items.map(item => <Post key={item.id} post={item} updateVote={updateVote} />)}
  </section>
);

PostList.propTypes = {
  items: PropTypes.array.isRequired,
  updateVote: PropTypes.func.isRequired,
};

export default PostList;
