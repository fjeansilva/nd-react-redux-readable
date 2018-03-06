import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Category from '../category';
import PostSummary from './PostSummary';
import PostTitle from './PostTitle';
import PostActions from './PostActions';
import PostInfo from './PostInfo';
import VoteScore from '../../utils/VoteScore';

const Post = ({ post, updateVote }) => (
  <article className="post">
    <VoteScore
      score={post.voteScore}
      onUpVote={() => updateVote(post.id, 'upVote')}
      onDownVote={() => updateVote(post.id, 'downVote')}
    />
    <PostSummary>
      <Category name={post.category} />
      <Link to={`/${post.category}/${post.id}`}>
        <PostTitle text={post.title} />
      </Link>
      <PostInfo
        date={post.timestamp}
        userName={post.author}
        commentCount={post.commentCount}
      />
      <PostActions />
    </PostSummary>
  </article>
);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    commentCount: PropTypes.number.isRequired,
  }).isRequired,
  updateVote: PropTypes.func.isRequired,
};

export default Post;
