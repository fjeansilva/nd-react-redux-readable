import React from 'react';
import Icon from '../../utils/Icon';

const PostActions = ({ commentCount }) => (
  <div className="post__actions">
    <a href="/">
      <Icon name="fa-comments-o" />
      <span> {commentCount} comment(s)</span>
    </a>
    <a href="/">edit</a>
    <a href="/">delete</a>
  </div>
);

export default PostActions;
