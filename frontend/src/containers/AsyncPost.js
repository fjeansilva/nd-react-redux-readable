import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPost, votePost } from '../components/post/actions';
import { fetchComments } from '../components/comment/actions';
import PostDetails from '../components/post/PostDetails';

class AsyncPost extends Component {
  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    if (params.post_id) {
      this.props.fetchPost(params.post_id);
      this.props.fetchComments(params.post_id);
    }
  }

  handleUpdateVote = (id, vote) => {
    this.props.votePost(id, vote);
  }

  render() {
    const { post, comments } = this.props;
    if (!post.id) return 'Loading...';
    return (
      <PostDetails
        post={this.props.post}
        updateVote={this.handleUpdateVote}
        comments={comments}
      />
    );
  }
}

const mapStateToProps = state => ({
  post: state.selectedPost,
  comments: state.comments.byId ? Object.values(state.comments.byId) : [],
});

const mapDispatchToProps = dispatch => ({
  fetchPost: id => dispatch(fetchPost(id)),
  fetchComments: id => dispatch(fetchComments(id)),
  votePost: (id, vote) => dispatch(votePost(id, vote)),
});

AsyncPost.propTypes = {
  fetchPost: PropTypes.func.isRequired,
  fetchComments: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      post_id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  post: PropTypes.shape({
    id: PropTypes.string,
    voteScore: PropTypes.number,
    category: PropTypes.string,
    title: PropTypes.string,
    timestamp: PropTypes.number,
    author: PropTypes.string,
    commentCount: PropTypes.number,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AsyncPost);
