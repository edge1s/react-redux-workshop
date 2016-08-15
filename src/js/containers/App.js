import {connect} from 'react-redux';

import App from '../components/App';
import {fetchData} from '../actions/blog';

const mapStateToProps = store => {
  return {
    loading: store.blog.loading
  }
};
export default connect(mapStateToProps, {fetchData})(App);
