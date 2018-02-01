import React from 'react';
import PropTypes from 'prop-types';

const TimeAgo = ({ children }) => (
  <p>Enviado 6 horas atrás por {children}</p>
);

TimeAgo.propTypes = {
  children: PropTypes.element.isRequired,
};

export default TimeAgo;
