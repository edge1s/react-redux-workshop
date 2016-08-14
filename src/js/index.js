import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './containers/App';
import SearchView from './components/SearchView';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SearchView}/>
      </Route>
    </Router>
  </Provider>,
  document.querySelector('#app')
);
