import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const Post = ({hideComments, post: {id, title, body, comments}}) => {
  const commentsHtml = comments && comments.map(comment => {
    return <div key={comment.id} className="post_comment-body">{comment.body}</div>;
  });
  return (
    <div className="post">
      <div className="post__title"><Link to={`/post/${id}`}>{title}</Link></div>
      <div className="post__body">{body}</div>
      { !hideComments ?
        <div className="post__comments">{commentsHtml}</div> : ''}
    </div>
  )
};

Post.propTypes = {
  post: PropTypes.object,
  hideComments: PropTypes.bool
};

export default Post;
