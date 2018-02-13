import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchPosts from './actions';
import PostList from './PostList';
import Spinner from '../spinner';
import {
  ORDER_BY_VOTE_SCORE,
  ORDER_BY_DATE_CREATED,
} from '../../constants/OrderByTypes';

const orderPosts = (posts, orderBy) => {
  if (!posts) return [];
  const items = Object.values(posts);
  switch (orderBy) {
    case ORDER_BY_VOTE_SCORE:
      return items.sort((a, b) => b.voteScore > a.voteScore);
    case ORDER_BY_DATE_CREATED:
      return items.sort((a, b) => b.timestamp > a.timestamp);
    default:
      return items;
  }
};


class PostContainer extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { isFetching, posts } = this.props;
    if (isFetching) return <Spinner />;
    return (
      <PostList items={posts} />
    );
  }
}

PostContainer.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isFetching: state.ui.postList.isFetching,
  posts: orderPosts(state.posts.byId, state.postsOrderBy),
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: category => dispatch(fetchPosts(category)),
});

PostContainer.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);

