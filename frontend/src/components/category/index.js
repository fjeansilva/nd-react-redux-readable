import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ name }) => (
  <h5 className="category">{name}</h5>
);

Category.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Category;
