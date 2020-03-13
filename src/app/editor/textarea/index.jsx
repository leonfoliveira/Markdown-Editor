import React from 'react';

export default props => (
  <div className="editor-textarea">
    <textarea
      className="textarea"
      value={props.content}
      onChange={props.onChange}
    ></textarea>
  </div>
)
