import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import fetchCategories from '../category/actions';
import Spinner from '../spinner';
import Nav from './index';

class NavContainer extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const { categories } = this.props;
    if (!categories) return <Spinner />;
    return (
      <Nav items={categories} />
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.byId ? Object.values(state.categories.byId) : null,
});

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavContainer));
