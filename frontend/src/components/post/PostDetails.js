import React from 'react';
import PropTypes from 'prop-types';
import Category from '../category';
import PostSummary from './PostSummary';
import PostTitle from './PostTitle';
import VoteScore from '../../utils/VoteScore';
import PostActions from './PostActions';
import PostInfo from './PostInfo';
import CommentsList from '../comment/CommentsList';

const PostDetails = ({ post }) => (
  <section className="post">
    <VoteScore score={post.voteScore} onUpVote={() => console.log(post.id, 'upVote')} onDownVote={() => console.log(post.id, 'downVote')} />
    <PostSummary>
      <Category name={post.category} />
      <PostTitle text={post.title} className="post__title" />
      <PostInfo
        date={post.timestamp}
        userName={post.author}
        commentCount={post.commentCount}
      />
      <p style={{ fontSize: '0.9em', marginTop: '20px' }} >
        { post.body }
      </p>
      <PostActions />
    </PostSummary>
    <CommentsList />
  </section>
);

PostDetails.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    commentCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default PostDetails;
