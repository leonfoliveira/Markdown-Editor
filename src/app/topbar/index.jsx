import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SidebarButton from './sidebarButton';
import TitleInput from './titleInput';

export default () => {
  const title = useSelector(state => state.doc.title);
  const dispatch = useDispatch();

  return (
    <div className="topbar">
      <SidebarButton
        onClick={() => dispatch({
          type: 'SIDEBAR_SHOW'
        })}
      />
      <TitleInput
        title={title}
        onChange={(e) => dispatch({
          type: 'DOC_TITLE_CHANGED',
          title: e.target.value
        })}
      />
    </div>
  )
}
