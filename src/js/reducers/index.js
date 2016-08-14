import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import blog from './blog';

const appReducers = combineReducers({
  blog,
  routing: routerReducer
});

export default appReducers;
