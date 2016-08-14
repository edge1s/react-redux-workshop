import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import App from './containers/App';
import SearchView from './components/SearchView';
import store from './store';
import PostView from './containers/PostView';

const enhancedHistory = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={enhancedHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SearchView}/>
        <Route path="post/:id" component={PostView}/>
      </Route>
    </Router>
  </Provider>,
  document.querySelector('#app')
);
