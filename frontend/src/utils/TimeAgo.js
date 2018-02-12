import React from 'react';
import PropTypes from 'prop-types';
import TimeAgo from 'timeago-react';

const Timer = ({ children, date }) => (
  <p>Submmited <TimeAgo datetime={date} live /> by {children}</p>
);

Timer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Timer;
