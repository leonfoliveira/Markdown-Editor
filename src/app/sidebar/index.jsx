import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './style.css';

import UserProfile from './userProfile';
import Document from './document';
import { openDocument, newDocument, deleteDocument } from '../actions';

export default props => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

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
          user.documents
          ? user.documents.map(doc => (
            <Document
              key={doc._id}
              doc={doc}
              handleOpen={() => dispatch(openDocument(doc))}
              handleDelete={() => dispatch(deleteDocument(doc._id))}
            />
          ))
          : null
        }
      </div>
      <div className="doc-new-wrap">
        <button className="doc-new" onClick={() => dispatch(newDocument())}>
          <i className="fa fa-plus"></i>
        </button>
      </div>
    </div>
  )
}
