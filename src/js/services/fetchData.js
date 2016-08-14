import 'whatwg-fetch';
import {blogLoading, attachPosts, attachUsers} from '../actions/blog';
import {getPosts} from './posts';
import {getUsers} from './users';

const fetchData = () => {
  return dispatch => {
    dispatch(blogLoading(true));
    Promise.all([getPosts(), getUsers()])
      .then(values => {
        dispatch(attachPosts(values[0]));
        dispatch(attachUsers(values[1]));
        dispatch(blogLoading(false));
      });
  }
};

export default fetchData;
