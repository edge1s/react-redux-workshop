import React, {PropTypes} from 'react';

import Post from './Post';

const PostsList = props => {
  const posts = props.posts.map((post, idx) => {
    return <Post key={idx} post={post}/>
  });

  return(
    <div className="posts-list">
      {posts}
    </div>
  )
};

PostsList.propTypes = {
  posts: PropTypes.array
};

export default PostsList;
