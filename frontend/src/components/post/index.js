import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Category from '../category';
import PostSummary from './PostSummary';
import PostTitle from './PostTitle';
import PostActions from './PostActions';
import TimeAgo from '../../utils/TimeAgo';
import UserInfo from '../user';
import VoteScore from '../../utils/VoteScore';

const Post = ({ post, updateVote }) => (
  <article className="post">
    <VoteScore score={post.voteScore} onUpVote={() => updateVote(post.id, 'upVote')} onDownVote={() => updateVote(post.id, 'downVote')} />
    <PostSummary>
      <Category name={post.category} />
      <Link to={`/${post.category}/${post.id}`}>
        <PostTitle text={post.title} />
      </Link>
      <TimeAgo date={post.timestamp}>
        <UserInfo user={post.author} />
      </TimeAgo>
      <PostActions commentCount={post.commentCount} />
    </PostSummary>
  </article>
);

Post.propTypes = {
  post: PropTypes.object.isRequired,
  updateVote: PropTypes.func.isRequired,
};

export default Post;
