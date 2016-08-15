import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reduxPromiseMiddleware from 'redux-promise';

import appReducers from './reducers';
import logger from './middlewares/logger';

const middlewares = applyMiddleware(thunk, reduxPromiseMiddleware, logger);
const store = createStore(appReducers, compose(
  middlewares,
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store;
