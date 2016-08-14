import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import SearchView from './components/SearchView';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <SearchView/>
  </Provider>,
  document.querySelector('#app')
);
