import React from 'react';
import { hydrate } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import preloadedState from './utils/store.json';
import reducer from './reducers';
import App from './routes/App.js';

const store = createStore(reducer, preloadedState);

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app'),
);
