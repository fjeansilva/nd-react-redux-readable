import React from 'react';
import PropTypes from 'prop-types';
import TimeAgo from 'timeago-react';
import UserInfo from '../UserInfo';
import CommentInfo from '../comment/CommentInfo';

const PostInfo = ({ date, userName, commentCount }) => (
  <p>
    <span>Submmited </span>
    <TimeAgo
      datetime={date}
      live
    /> by <UserInfo user={userName} /> - <CommentInfo commentCount={commentCount} />
  </p>
);

PostInfo.propTypes = {
  date: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired,
};

export default PostInfo;
