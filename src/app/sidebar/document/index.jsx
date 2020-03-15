import React from 'react';

export default props => (
  <div className="sidebar-document">
    <button className="doc-open" onClick={props.handleOpen}>
      <span className="doc-title">{props.doc.title}.md</span>
    </button>
    <button className="doc-del" onClick={props.handleDelete}>
      <i className="fa fa-trash"></i>
    </button>
  </div>
)