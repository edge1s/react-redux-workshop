import 'whatwg-fetch';
import {
  API_URL
} from '../constants';

export const getUsers = () => {
  return fetch(`${API_URL}/users`)
    .then(response => response.json());
};
