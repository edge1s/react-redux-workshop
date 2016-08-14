import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router';

import {getPostComments} from '../services/comments';
import Post from './Post';
class PostView extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {attachPostComments, params: {id}} = this.props;
    attachPostComments(getPostComments(id));
  }

  render() {
    const {post} = this.props;
    return (
      <div className="post-view">
        <Link to="/">Go to search</Link><br/>
        <Post post={post}/>
      </div>
    )
  }
}

PostView.propTypes = {
  attachPostComments: PropTypes.func,
  post: PropTypes.object
};

export default PostView;
