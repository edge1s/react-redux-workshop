import {
  SEARCH,
  ATTACH_POSTS,
  ATTACH_USERS,
  ATTACH_POST_COMMENTS,
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

import {handleActions} from 'redux-actions';

const blogReducer = handleActions({
  [SEARCH]: (state, action) => ({...state, searchVal: action.payload}),
  [ATTACH_POSTS]: (state, action) => ({...state, posts: action.payload}),
  [ATTACH_USERS]: (state, action) => ({...state, users: action.payload}),
  [ATTACH_POST_COMMENTS]: {
    next: attachPostCommentsSuccess,
    throw: attachPostCommentsError
  },
  [SET_SEARCH_INPUT]: (state, action) => ({...state, searchInputVal: action.payload}),
  [BLOG_LOADING]: (state, action) => ({...state, loading: action.payload}),

}, defaultState);

function attachPostCommentsSuccess(state, action) {
  const {payload} = action;
  if (payload && payload[0] && payload[0].postId) {
    const postId = payload[0].postId;
    const stateCopy = {...state};
    let post = stateCopy.posts.get(postId);
    post = {...post, comments: payload};
    stateCopy.posts.set(postId, post);
    return {...state, posts: state.posts};
  } else {
    return state;
  }
}

function attachPostCommentsError(state, action) {
  console.error('error fetching comments');
  return state;
}

export default blogReducer;