import React, {PropTypes, Component} from 'react';

import SearchBox from '../containers/SearchBox';
import PostsList from '../containers/PostsList';

const SearchView = () => {
  return (
    <div className="search-view">
      <SearchBox/>
      <PostsList hideComments={true}/>
    </div>
  )
};

export default SearchView;
