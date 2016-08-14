import React from 'react';
import {Link} from 'react-router';

const PostView = ({params: {id}}) => {
  return (
    <div className="post-view">
      <Link to="/">Go to search</Link><br/>
      Post view {id}
    </div>
  )
};

export default PostView;
