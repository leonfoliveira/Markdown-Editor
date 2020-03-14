import React from 'react';

export default props => (
  <div className="editor-textarea">
    <textarea
      className="editor-input"
      value={props.content}
      onChange={props.onChange}
    ></textarea>
  </div>
)
