import {createStore} from 'redux';

import appReducers from './reducers';

const store = createStore(appReducers, window.devToolsExtension && window.devToolsExtension());

export default store;
