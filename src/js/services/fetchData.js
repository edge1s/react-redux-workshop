import 'whatwg-fetch';
import {blogLoading, attachPosts, attachUsers} from '../actions/blog';
import {getPosts} from './posts';
import {getUsers} from './users';

const fetchData = () => {
  return dispatch => {
    dispatch(blogLoading(true));
    Promise.all([getPosts(), getUsers()])
      .then(values => {
        dispatch(attachPosts(arrayToMap(values[0])));
        dispatch(attachUsers(arrayToMap(values[1])));
        dispatch(blogLoading(false));
      });
  }
};

const arrayToMap = arr => {
  const map = new Map();
  arr.forEach(el => {
    map.set(el.id, el);
  });

  return map;
};

export default fetchData;
