/* eslint import/first: "off" */
require('es6-promise/auto'); // Adding Promise polyfill

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer as HotReloader } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureRaven from './config/raven';
import configureStore from './store/configure';
import routes from './routes';

// Tell webpack to include static images in bundle
require.context('../static/', true, /images/);
import './styles/main.less';

const store = configureStore(browserHistory);
configureRaven(store);
const history = syncHistoryWithStore(browserHistory, store);

// App initialization
const content = (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
);

const renderRoot = () => ReactDOM.render(
  <HotReloader>{content}</HotReloader>,
  document.getElementById('app'),
);
renderRoot();

// Hot Module Replacement
if (module.hot) {
  module.hot.accept('./routes', renderRoot);
}