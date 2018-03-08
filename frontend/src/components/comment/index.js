import React from 'react';
import PropTypes from 'prop-types';
import TimeAgo from 'timeago-react';
import UserInfo from '../UserInfo';
import VoteScore from '../../utils/VoteScore';

const Comment = ({
  id, voteScore, author, timestamp, body,
}) => (
  <article className="comment">
    <VoteScore
      score={voteScore}
      onUpVote={() => console.log('upVote')}
      onDownVote={() => console.log('downVote')}
    />
    <div>
      <div className="comment__info">
        <UserInfo user={author} />
        <span> - </span>
        <TimeAgo
          datetime={timestamp}
          live
        />
      </div>
      <p className="comment__text">
        {body}
      </p>
      <div className="comment__actions"><a href={`/${id}`}>edit</a><a href="/">delete</a></div>
    </div>
  </article>
);

Comment.propTypes = {
  voteScore: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Comment;
