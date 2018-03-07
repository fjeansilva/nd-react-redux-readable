import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import fetchCategories from '../components/category/actions';
import Header from '../components/header';
import PageActions from '../components/PageActions';
import Nav from '../components/nav';
import AsyncPosts from '../containers/AsyncPosts';
import AsyncPost from '../containers/AsyncPost';
import Footer from '../components/footer';

class AsyncApp extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }
  render() {
    const { categories } = this.props;
    return (
      <div className="wrapper">
        <Header />
        <PageActions />
        <Nav items={categories} />
        <Route
          exact
          path="/"
          component={AsyncPosts}
        />
        <Route
          exact
          path="/:category"
          render={() => (
            <h1>List posts of category</h1>
          )}
        />
        <Route
          exact
          path="/:category/:post_id"
          component={AsyncPost}
        />
        <Footer />
      </div>
    );
  }
}

AsyncApp.propTypes = {
  fetchCategories: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
  })).isRequired,
};

AsyncApp.defaultProp = {
  categories: [],
};

const mapStateToProps = state => ({
  categories: state.categories.byId ? Object.values(state.categories.byId) : [],
});

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AsyncApp));
