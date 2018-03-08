import React from 'react';
import PropTypes from 'prop-types';
import Comment from './index';

const CommentsList = ({ comments }) => (
  <section className="comments">
    <h4 className="comments__title">{comments.length} Comment(s)</h4>
    {comments.filter(c => !c.parentDeleted).map(c => (
      <Comment
        key={c.id}
        id={c.id}
        timestamp={c.timestamp}
        author={c.author}
        voteScore={c.voteScore}
        body={c.body}
      />
    ))}
  </section>
);

CommentsList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentsList;
