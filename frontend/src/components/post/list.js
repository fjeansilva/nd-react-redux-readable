import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from './index';

const items = () => {
  let rows = [];
  for (let index = 0; index < 5; index++) {
    rows.push(
      <Post key={index} />
    );
  }
  return rows;
}

class List extends Component {

  state = {
    category: 'all'
  }

  componentWillReceiveProps(nextProps) {
    const { match } = nextProps;
    switch (match.params.category) {
      case 'react':
        this.setState({ category: 'react' });
        break;
      case 'redux':
        this.setState({ category: 'redux' });
        break;
      case 'udacity':
        this.setState({ category: 'react' });
        break;
      default:
        this.setState({ category: 'all' });
        break;
    }
  }
  
  render() {
    return (
      <div className="container">
        {items()}
      </div>
    )
  }
}

List.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};


export default List;