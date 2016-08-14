import {
  SEARCH,
  ATTACH_POSTS,
  SET_SEARCH_INPUT
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

export const setSearchInput = inputVal => {
  return {
    type: SET_SEARCH_INPUT,
    payload: inputVal
  }
};
