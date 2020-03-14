import React from 'react';

export default props => (
  <div className="sidebar-document">
    <button className="doc-open">
      <span className="doc-title">{props.title}.md</span>
    </button>
    <button className="doc-del">
      <i className="fa fa-trash"></i>
    </button>
  </div>
)