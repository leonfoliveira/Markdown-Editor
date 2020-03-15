import React from 'react';
import { useSelector } from 'react-redux';

import 'font-awesome/css/font-awesome.min.css';
import './style.css';

import Topbar from './topbar';
import Toolbar from './toolbar';
import Sidebar from './sidebar';
import Editor from './editor';
import Preview from './preview';
import Bottombar from './bottombar';

export default () => {
  const sidebarVisible = useSelector(state => state.sidebar.visible);

  return (
    <div className="app">
      <Topbar />
      <Toolbar />
      <Sidebar visible={sidebarVisible} />
      <Editor />
      <Preview />
      <Bottombar />
    </div>
  );
}
