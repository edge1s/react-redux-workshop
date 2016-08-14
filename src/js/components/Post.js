import React, {PropTypes} from 'react';

const Post = props => {
  return (
    <div className="post">
      <div className="post_title"><a href="#">{props.post.title}</a></div>
      <div className="post_body">{props.post.body}</div>
    </div>
  )
};

Post.propTypes = {
  posts: PropTypes.object
};

export default Post;
