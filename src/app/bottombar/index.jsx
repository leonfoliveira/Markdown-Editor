import React from 'react';

import './style.css';

export default () => {
  return (
    <div className="bottombar">
      <div className="bottombar-author">
        Leonardo F Oliveira
      </div>
      <a className="bottombar-github" href="https://github.com/leonfoliveira/Markdown-Editor">
        <i className="fa fa-github"></i>
      </a>
      <div className="bottombar-year">
        2020
      </div>
    </div>
  )
}
