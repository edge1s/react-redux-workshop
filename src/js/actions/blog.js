import {
  SEARCH,
  ATTACH_POSTS
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
