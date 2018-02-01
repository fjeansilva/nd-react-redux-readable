import React from 'react';
import PropTypes from 'prop-types';

const PostTitle = ({ text }) => (
  <a href="/">
    { text }
  </a>
);

PostTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PostTitle;
