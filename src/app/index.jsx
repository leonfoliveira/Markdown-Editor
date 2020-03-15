import React from 'react';
import { useSelector } from 'react-redux';

import 'font-awesome/css/font-awesome.min.css';
import './style.css';

import Login from './login';
import Topbar from './topbar';
import Toolbar from './toolbar';
import Sidebar from './sidebar';
import Editor from './editor';
import Preview from './preview';
import Bottombar from './bottombar';

export default () => {
  const sidebarVisible = useSelector(state => state.sidebar.visible);
  const logged = useSelector(state => state.user.logged);
  const empty = useSelector(state => state.doc.empty);

  if (!logged) {
    return (
      <div className="app">
        <Login />
      </div>
    );
  }

  return (
    <div className={`app ${empty ? 'empty' : 'populated'}`}>
      <Topbar />
      <Toolbar />
      <Sidebar visible={sidebarVisible} />
      {
        empty
        ? <div className="blank">empty</div>
        : <div>
            <Editor />
            <Preview />
          </div>
      }
      <Bottombar />
    </div>
  );
}
