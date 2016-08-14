import React, {PropTypes} from 'react';

import Post from './Post';

const PostsList = props => {
  const filterPosts = (value, posts) => {
    return posts.filter(post => {
      return post.body.indexOf(value) !== -1;
    });
  };

  const postsArr = [...props.posts].map(([id, post]) => {
    return post;
  });
  const filteredPosts = filterPosts(props.searchVal, postsArr);
  const posts = filteredPosts.map((post, idx) => {
    return <Post key={idx} post={post} hideComments={props.hideComments}/>
  });

  return (
    <div className="posts-list">
      {posts}
    </div>
  )
};

PostsList.propTypes = {
  posts: PropTypes.object,
  searchVal: PropTypes.string,
  hideComments: PropTypes.bool
};

export default PostsList;
