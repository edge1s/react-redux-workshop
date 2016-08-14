import {connect} from 'react-redux';

import {attachPostComments} from '../actions/blog';
import PostView from '../components/PostView';

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.blog.posts.get(parseInt(ownProps.params.id))
  }
};
export default connect(mapStateToProps, {attachPostComments})(PostView);