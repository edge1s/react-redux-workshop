import {connect} from 'react-redux';

import SearchView from '../components/SearchView';
import {attachPosts} from '../actions/blog';
export default connect(null, {attachPosts})(SearchView);
