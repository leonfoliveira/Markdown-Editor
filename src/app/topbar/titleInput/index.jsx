import React from 'react';

export default props => (
  <div className="title-input">
    <input
      type="text"
      className="input"
      value={props.title}
      onChange={props.onChange}
    />
  </div>
)
