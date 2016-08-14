import 'whatwg-fetch';
import {
  API_URL
} from '../constants';

export const getPostComments = postId => {
  return fetch(`${API_URL}/posts/${postId}/comments`)
    .then(response => response.json());
};
