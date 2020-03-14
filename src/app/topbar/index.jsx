import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './style.css';

import TitleInput from './titleInput';

export default () => {
  const title = useSelector(state => state.doc.title);
  const dispatch = useDispatch();

  return (
    <div className="topbar">
      <button
        className="topbar-sidebar"
        onClick={() => dispatch({ type: 'SIDEBAR_SHOW' })}
      >
        <i className="fa fa-bars"></i>
      </button>
      <TitleInput
        title={title}
        onChange={(e) => dispatch({
          type: 'DOC_TITLE_CHANGED',
          title: e.target.value
        })}
      />
      <div className="topbar-download-wrap">
        <button className="topbar-download">
          <i className="fa fa-download"></i>
        </button>
      </div>
    </div>
  )
}
