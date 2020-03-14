import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
      {
        user.docs.map(doc => (
          <Document
            key={doc._id}
            title={doc.title}
          />
        ))
      }
      <button className="doc-new">
        <i className="fa fa-plus"></i>
      </button>
    </div>
  )
}
