import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './style.css';

import TitleInput from './titleInput';
import { titleChange, sidebarShow, getDocuments } from '../actions';

export default () => {
  const title = useSelector(state => state.doc.title);
  const empty = useSelector(state => state.doc.empty);
  const dispatch = useDispatch();

  return (
    <div className="topbar">
      <button
        className="topbar-sidebar"
        onClick={() => dispatch([
          sidebarShow(),
          getDocuments()
        ])}
      >
        <i className="fa fa-bars"></i>
      </button>
      {
        empty
        ? null
        : <TitleInput
          title={title}
          onChange={(e) => dispatch(titleChange(e.target.value))}
        />
      }
      {
        empty
        ? null
        : <div className="topbar-download-wrap">
            <button className="topbar-download">
              <i className="fa fa-download"></i>
            </button>
          </div>
      }      
    </div>
  )
}
