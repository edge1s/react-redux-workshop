import {createStore, applyMiddleware, compose} from 'redux';
import reduxPromiseMiddleware from 'redux-promise';
import createSagaMiddleware from 'redux-saga';

import appReducers from './reducers';
import logger from './middlewares/logger';

import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();
const middlewares = applyMiddleware(sagaMiddleware, reduxPromiseMiddleware, logger);
const store = createStore(appReducers, compose(
  middlewares,
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

sagaMiddleware.run(rootSaga);

export default store;
