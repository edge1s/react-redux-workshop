import {connect} from 'react-redux';

import SearchBox from '../components/SearchBox';
import {search} from '../actions/blog';

export default connect(null, {search})(SearchBox);
