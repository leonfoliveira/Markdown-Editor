import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './style.css';

import UserProfile from './userProfile';
import Document from './document';

export default () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <button
        className="sidebar-close"
        onClick={() => dispatch({ type: 'SIDEBAR_HIDE' })}
      >
        <i className="fa fa-angle-left"></i>
      </button>
      <UserProfile
        email={user.auth.email}
        logout={() => dispatch({ type: 'USER_LOGOUT' })}
      />
      <div className="sidebar-document-wrap">
        {
          user.docs.map(doc => (
            <Document
              key={doc._id}
              title={doc.title}
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
