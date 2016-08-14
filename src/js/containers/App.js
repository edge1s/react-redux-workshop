import {connect} from 'react-redux';

import App from '../components/App';
import {attachPosts} from '../actions/blog';
export default connect(null, {attachPosts})(App);
