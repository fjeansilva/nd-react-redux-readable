import React from 'react';
import PropTypes from 'prop-types';

const VoteScore = ({ score, onUpVote, onDownVote }) => (
  <div className="vote__score">
    <i className="fa fa-caret-up" aria-hidden="true" onClick={onUpVote} />
    <span className="score">{score}</span>
    <i className="fa fa-caret-down" aria-hidden="true" onClick={onDownVote} />
  </div>
);

VoteScore.propTypes = {
  score: PropTypes.number.isRequired,
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
};

export default VoteScore;
