import React from 'react';

export default props => (
  <button className="tool-button" onClick={props.onClick}>
    { props.icon
      ? <i className={`fa fa-${props.icon}`}></i>
      : null
    }
    {props.children}
  </button>
);
