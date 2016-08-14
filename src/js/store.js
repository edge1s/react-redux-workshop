import {createStore, applyMiddleware, compose} from 'redux';

import appReducers from './reducers';
import logger from './middlewares/logger';
import promise from './middlewares/promise';

const middlewares = applyMiddleware(promise, logger);
const store = createStore(appReducers, compose(
  middlewares,
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store;
