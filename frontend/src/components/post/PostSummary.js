import React from 'react';
import PropTypes from 'prop-types';

const PostSummary = ({ children }) => (
  <section className="post__info">
    { children }
  </section>
);

PostSummary.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default PostSummary;
