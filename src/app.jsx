/**
 * Created by dinhquangtrung on 11/1/15.
 */

import './index.html';
import App from './containers/App.jsx';
import configureStore from './store/configureStore';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
