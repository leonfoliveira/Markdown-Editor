import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import UserReducer from '../reducers/user';
import DocumentReducer from '../reducers/document';
import SidebarReducer from '../reducers/sidebar';

import Topbar from './topbar';
import Toolbar from './topbar';
import Sidebar from './topbar';
import Editor from './topbar';
import Preview from './topbar';

const reducers = combineReducers({
  user: UserReducer,
  document: DocumentReducer,
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
