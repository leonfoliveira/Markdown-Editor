import React from 'react';

export default props => (
  <div className="sidebar-user">
    <i className="fa fa-user"></i>
    <span className="user-email">{props.email}</span>
  </div>
)
