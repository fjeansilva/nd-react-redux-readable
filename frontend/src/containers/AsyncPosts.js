import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts, votePost } from '../components/post/actions';
import PostList from '../components/post/PostList';
import {
  ORDER_BY_VOTE_SCORE,
  ORDER_BY_DATE_CREATED,
} from '../constants/OrderByTypes';

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


class AsyncPosts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  handleUpdateVote = (id, vote) => {
    this.props.votePost(id, vote);
  }

  render() {
    const { isFetching, posts } = this.props;
    if (isFetching) return 'Loading...';
    return (
      <PostList items={posts} updateVote={this.handleUpdateVote} />
    );
  }
}

AsyncPosts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  votePost: PropTypes.func.isRequired,
  posts: PropTypes.array,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isFetching: state.ui.postList.isFetching,
  posts: orderPosts(state.posts.byId, state.postsOrderBy),
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: category => dispatch(fetchPosts(category)),
  votePost: (id, vote) => dispatch(votePost(id, vote)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AsyncPosts);

