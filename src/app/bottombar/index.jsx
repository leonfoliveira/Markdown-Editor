import React from 'react';

import './style.css';

export default () => {
  return (
    <div className="bottombar">
      <small className="bottombar-author" title="author">
        Author
        <a className="bottombar-github" href="https://github.com/leonfoliveira">
          <i className="fa fa-github"></i>
        </a>
        2020
      </small>
    </div>
  )
}
