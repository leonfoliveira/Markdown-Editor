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

const reducers = combineReducers({
  user: UserReducer,
  doc: DocumentReducer,
  sidebar: SidebarReducer
});

const store = createStore(reducers);

export default () => (
  <div className="app">
    <Provider store={store}>
      <Topbar />
      <Toolbar />
      <Sidebar />
      <Editor />
      <Preview />
    </Provider>
  </div>
);
