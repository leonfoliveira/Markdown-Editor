import React, { useEffect } from 'react';

export default props => {
  const handleChange = e => {
    props.onChange(e);

    e.target.style.width = `${e.target.value.length + 1}ch`;
  }

  useEffect(() => {
    let elem = document.getElementById('title-input');

    elem.style.width = `${elem.value.length + 0.5}ch`;
  });

  return (
    <div className="title-left">
      <input
        type="text"
        className="title-input"
        value={props.title}
        onChange={handleChange}
        id="title-input"
      />
      <span className="extension">.md</span>
    </div>
  )
}
