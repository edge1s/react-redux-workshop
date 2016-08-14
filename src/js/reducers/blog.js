import {
  SEARCH,
  ATTACH_POSTS
} from '../constants';

const defaultState = {
  searchVal: '',
  posts: []
};

const blogReducer = (state = defaultState, action) => {
  const {type, payload} = action;

  switch(type) {
    case SEARCH:
      return {...state, searchVal: payload};
    case ATTACH_POSTS:
      return {...state, posts: payload};
    default:
      return state;
  }
};

export default blogReducer;