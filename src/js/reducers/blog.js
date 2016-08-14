import {
  SEARCH,
  ATTACH_POSTS,
  SET_SEARCH_INPUT
} from '../constants';

const defaultState = {
  searchVal: '',
  posts: [],
  searchInputVal: ''
};

const blogReducer = (state = defaultState, action) => {
  const {type, payload} = action;

  switch (type) {
    case SEARCH:
      return {...state, searchVal: payload};
    case ATTACH_POSTS:
      return {...state, posts: payload};
    case SET_SEARCH_INPUT:
      return {...state, searchInputVal: payload};
    default:
      return state;
  }
};

export default blogReducer;