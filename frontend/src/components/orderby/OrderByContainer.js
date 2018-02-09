import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import OrderBy from './index';
import setOrderBy from './actions';

const mapDispatchToProps = dispatch => ({
  setOrderBy: value => dispatch(setOrderBy(value)),
});

export default withRouter(connect(null, mapDispatchToProps)(OrderBy));
