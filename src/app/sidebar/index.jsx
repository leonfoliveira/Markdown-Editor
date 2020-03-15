import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './style.css';

import UserProfile from './userProfile';
import Document from './document';

export default props => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleOpen = (doc) => {
    dispatch({
      type: 'DOC_OPENED',
      doc
    });
  }

  return (
    <div className={`sidebar ${props.visible ? 'visible' : 'hidden'}`}>
      <button
        className="sidebar-close"
        onClick={() => dispatch({ type: 'SIDEBAR_HIDE' })}
      >
        <i className="fa fa-angle-left"></i>
      </button>
      <UserProfile
        email={user.email}
        logout={() => dispatch({ type: 'USER_LOGOUT' })}
      />
      <div className="sidebar-document-wrap">
        {
          user.documents.map(doc => (
            <Document
              key={doc._id}
              doc={doc}
              handleOpen={handleOpen}
            />
          ))
        }
      </div>
      <div className="doc-new-wrap">
        <button className="doc-new">
          <i className="fa fa-plus"></i>
        </button>
      </div>
    </div>
  )
}
