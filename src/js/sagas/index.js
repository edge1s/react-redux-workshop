import {takeEvery} from 'redux-saga';
import {call, put} from 'redux-saga/effects';

import {
  FETCH_DATA
} from '../constants';
import {arrayToMap} from '../utilities/map';
import {getPosts} from '../services/posts';
import {getUsers} from '../services/users';
import {blogLoading, attachPosts, attachUsers} from '../actions/blog';

export function* fetchData() {
  yield put(blogLoading(true));
  const posts = yield call(getPosts);
  yield put(attachPosts(arrayToMap(posts)));
  const users = yield call(getUsers);
  yield put(attachUsers(arrayToMap(users)));
  yield put(blogLoading(false));
}

export function* watchForFetchData(){
  yield* takeEvery(FETCH_DATA, fetchData); // takeLatest
}

export default function* rootSaga() {
  yield [
    watchForFetchData()
  ]
}
