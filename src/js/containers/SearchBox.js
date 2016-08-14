import {connect} from 'react-redux';

import SearchBox from '../components/SearchBox';
import {search, setSearchInput} from '../actions/blog';

const mapStateToProps = state => {
  return {
    searchInputVal: state.blog.searchInputVal
  }
};
export default connect(mapStateToProps, {search, setSearchInput})(SearchBox);
