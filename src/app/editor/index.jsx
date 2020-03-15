import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './style.css';

import Textarea from './textarea';
import { update } from './actions';

export default () => {
  const doc = useSelector(state => state.doc);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(update(e.target.value));
  }

  return (
    <div className="editor">
      <Textarea
        content={doc.content}
        onChange={(e) => handleChange(e)}
      />
    </div>
  )
}
