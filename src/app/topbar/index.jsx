import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TitleInput from './titleInput';

export default () => {
  const title = useSelector(state => state.doc.title);
  const dispatch = useDispatch();

  return (
    <div className="topbar">
      <button
        className="btn"
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
      <button className="topbar-download">
        <i className="fa fa-download"></i>
      </button>
    </div>
  )
}
