import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../utils/Icon';

const CommentInfo = ({ commentCount }) => (
  <span>
    <Icon name="fa-comments-o" />
    <span> {commentCount} comment(s)</span>
  </span>
);

CommentInfo.propTypes = {
  commentCount: PropTypes.number.isRequired,
};

export default CommentInfo;
