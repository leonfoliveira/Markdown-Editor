import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import UserReducer from '../../reducers/user';
import DocumentReducer from '../../reducers/document';

const reducers = combineReducers({
  user: UserReducer,
  document: DocumentReducer
});

const store = createStore(reducers);

export default () => (
  <div className="app">
    <Provider store={store}>
      Hello World
    </Provider>
  </div>
);
