import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import 'font-awesome/css/font-awesome.min.css';

import UserReducer from '../reducers/user';
import DocumentReducer from '../reducers/document';
import SidebarReducer from '../reducers/sidebar';

import Topbar from './topbar';
import Toolbar from './toolbar';
import Sidebar from './sidebar';
import Editor from './editor';
import Preview from './preview';
import Bottombar from './bottombar';

const reducers = combineReducers({
  user: UserReducer,
  doc: DocumentReducer,
  sidebar: SidebarReducer
});

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducers, devTools);

export default () => (
  <div className="app">
    <Provider store={store}>
      <Topbar />
      <Toolbar />
      <Sidebar />
      <Editor />
      <Preview />
      <Bottombar />
    </Provider>
  </div>
);
