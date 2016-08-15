import {
  SEARCH,
  ATTACH_POSTS,
  ATTACH_USERS,
  ATTACH_POST_COMMENTS,
  SET_SEARCH_INPUT,
  BLOG_LOADING
} from '../constants';

import {createAction} from 'redux-actions';

export const search = createAction(SEARCH);
export const attachPosts = createAction(ATTACH_POSTS);
export const attachUsers = createAction(ATTACH_USERS);
export const attachPostComments = createAction(ATTACH_POST_COMMENTS);
export const setSearchInput = createAction(SET_SEARCH_INPUT);
export const blogLoading = createAction(BLOG_LOADING);
