import React from 'react';

export default props => (
  <div className="title-input">
    <input
      type="text"
      className="input"
      value={props.title}
      onClick={props.onClick}
    />
    <span className="extension">.md</span>
  </div>
)
