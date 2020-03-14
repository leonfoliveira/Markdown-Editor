import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import 'font-awesome/css/font-awesome.min.css';

import UserReducer from './reducers/user';
import DocumentReducer from './reducers/document';
import SidebarReducer from './reducers/sidebar';

const reducers = combineReducers({
  user: UserReducer,
  doc: DocumentReducer,
  sidebar: SidebarReducer
});

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducers, devTools);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

serviceWorker.unregister();
