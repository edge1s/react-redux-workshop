import React, {PropTypes} from 'react';

import Post from './Post';

const PostsList = props => {
  const filterPosts = (value, posts) => {
    return posts.filter(post => {
      return post.body.indexOf(value) !== -1;
    });
  };
  const filteredPosts = filterPosts(props.searchVal, props.posts);

  const posts = filteredPosts.map((post, idx) => {
    return <Post key={idx} post={post}/>
  });

  return(
    <div className="posts-list">
      {posts}
    </div>
  )
};

PostsList.propTypes = {
  posts: PropTypes.array,
  searchVal: PropTypes.string
};

export default PostsList;
