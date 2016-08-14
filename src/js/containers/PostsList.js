import {connect} from 'react-redux';

import PostsList from '../components/PostsList';

const mapStateToProps = state => {
  return {
    searchVal: state.blog.searchVal
  }
};

export default connect(mapStateToProps)(PostsList);
