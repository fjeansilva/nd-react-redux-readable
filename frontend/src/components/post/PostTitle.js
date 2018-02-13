import React from 'react';
import PropTypes from 'prop-types';

const PostTitle = ({ text }) => (
  <span>{ text }</span>
);

PostTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PostTitle;
