import {connect} from 'react-redux';

import App from '../components/App';
import fetchData from '../services/fetchData';

const mapStateToProps = store => {
  return {
    loading: store.blog.loading
  }
};
export default connect(mapStateToProps, {fetchData})(App);
