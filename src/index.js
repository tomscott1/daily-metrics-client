import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { persistStore, autoRehydrate } from 'redux-persist'
import reduxThunk from 'redux-thunk';

import App from './components/app'
import Home from './components/home'
import Signin from './components/auth/signin'
import Signout from './components/auth/signout'
import Signup from './components/auth/signup'
import Metrics from './components/metric-list'
import AddMetric from './components/add-metric'
import Feature from './components/feature'
import RequireAuth from './components/auth/require_auth'
import reducers from './reducers'
import { AUTH_USER } from './actions/types'

const store = createStore(
  reducers,
  undefined,
  compose(
    applyMiddleware(reduxThunk),
    autoRehydrate()
  )
)


// const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
// const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
// If we have a token, consider the user to be signed in
if (token) {
  // we need to update application state
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="signin" component={Signin} />
        <Route path="signout" component={Signout} />
        <Route path="signup" component={Signup} />
        <Route path="feature" component={RequireAuth(Feature)} />
        <Route path="metrics" component={RequireAuth(Metrics)} />
        <Route path="addmetric" component={RequireAuth(AddMetric)} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
