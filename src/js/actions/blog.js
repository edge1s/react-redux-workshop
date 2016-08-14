import {
  SEARCH,
  ATTACH_POSTS,
  ATTACH_USERS,
  SET_SEARCH_INPUT,
  BLOG_LOADING
} from '../constants';

export const search = searchVal => {
  return {
    type: SEARCH,
    payload: searchVal
  }
};

export const attachPosts = posts => {
  return {
    type: ATTACH_POSTS,
    payload: posts
  }
};

export const attachUsers = users => {
  return {
    type: ATTACH_USERS,
    payload: users
  }
};

export const setSearchInput = inputVal => {
  return {
    type: SET_SEARCH_INPUT,
    payload: inputVal
  }
};

export const blogLoading = loading => {
  return {
    type: BLOG_LOADING,
    payload: loading
  }
};
