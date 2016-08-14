import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import appReducers from './reducers';
import logger from './middlewares/logger';
import promise from './middlewares/promise';

const middlewares = applyMiddleware(thunk, promise, logger);
const store = createStore(appReducers, compose(
  middlewares,
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store;
