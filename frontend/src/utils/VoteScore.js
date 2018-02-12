import React from 'react';

const VoteScore = ({ score }) => (
  <div className="vote__score">
    <i className="fa fa-caret-up" aria-hidden="true" />
    <span className="score">{score}</span>
    <i className="fa fa-caret-down" aria-hidden="true" />
  </div>
);

export default VoteScore;
