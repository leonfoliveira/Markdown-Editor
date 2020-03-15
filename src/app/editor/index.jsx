import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './style.css';

import Textarea from './textarea';
import { contentChange } from '../actions';

export default () => {
  const doc = useSelector(state => state.doc);
  const dispatch = useDispatch();

  return (
    <div className="editor">
      <Textarea
        content={doc.content}
        onChange={(e) => dispatch(contentChange(e.target.value))}
      />
    </div>
  )
}
