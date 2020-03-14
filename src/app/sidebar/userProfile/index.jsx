import React from 'react';

export default props => (
  <div className="sidebar-user">
    <i className="fa fa-user-circle"></i>
    <span className="user-email">{props.email}</span>
    <button className="user-logout" onClick={props.logout}>
      logout
    </button>
  </div>
)
