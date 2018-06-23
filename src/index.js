import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'; // импортим промис

import App from './components/app';
import reducers from './reducers';
console.log('reducers',reducers)
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore); // и пихаем сюда

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
