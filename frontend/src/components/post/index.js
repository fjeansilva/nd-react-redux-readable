import React from 'react';
import Category from '../category';
import PostSummary from './PostSummary';
import PostTitle from './PostTitle';
import PostActions from './PostActions';
import TimeAgo from '../../utils/TimeAgo';
import UserInfo from '../user';
import VoteScore from '../../utils/VoteScore';

const title = 'Modern React with Redux - Very impressive course on the topic of React &amp; Redux. This course is not just learning for coding on React framework, but also sharing some of the important concept of refactoring greater construction and specialized knowledge.';

const Post = () => (
  <article className="post">
    <VoteScore />
    <PostSummary>
      <Category name="react" />
      <PostTitle text={title} />
      <TimeAgo>
        <UserInfo />
      </TimeAgo>
      <PostActions />
    </PostSummary>
  </article>
);

export default Post;
