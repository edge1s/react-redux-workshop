import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const Post = ({post: {id, title, body}}) => {
  return (
    <div className="post">
      <div className="post_title"><Link to={`/post/${id}`}>{title}</Link></div>
      <div className="post_body">{body}</div>
    </div>
  )
};

Post.propTypes = {
  posts: PropTypes.object
};

export default Post;
