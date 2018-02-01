import React from 'react';
import Icon from '../../utils/Icon';

const PostActions = () => (
  <div className="post__actions">
    <a href="/">
      <Icon name="fa-comments-o" />
      <span> 345 comentário(s)</span>
    </a>
    <a href="/">editar</a>
    <a href="/">excluir</a>
  </div>
);

export default PostActions;
