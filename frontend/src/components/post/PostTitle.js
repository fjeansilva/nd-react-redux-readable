import React from 'react';
import PropTypes from 'prop-types';

const PostTitle = ({ text, className }) => (
  <span className={`${className}`}>{ text }</span>
);

PostTitle.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

PostTitle.defaultProps = {
  className: '',
};

export default PostTitle;
