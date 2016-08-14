import {
  SEARCH,
  ATTACH_POSTS,
  ATTACH_USERS,
  SET_SEARCH_INPUT,
  BLOG_LOADING
} from '../constants';

const defaultState = {
  searchVal: '',
  posts: {},
  users: {},
  searchInputVal: '',
  loading: true
};

const blogReducer = (state = defaultState, action) => {
  const {type, payload} = action;

  switch (type) {
    case SEARCH:
      return {...state, searchVal: payload};
    case ATTACH_POSTS:
      return {...state, posts: payload};
    case ATTACH_USERS:
      return {...state, users: payload}
    case SET_SEARCH_INPUT:
      return {...state, searchInputVal: payload};
    case BLOG_LOADING:
      return {...state, loading: payload};
    default:
      return state;
  }
};

export default blogReducer;