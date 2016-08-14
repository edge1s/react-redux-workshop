import 'whatwg-fetch';
import {
  API_URL
} from '../constants';

export const getPosts = () => {
  return fetch(`${API_URL}/posts`)
    .then(response => response.json());
};
