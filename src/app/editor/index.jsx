import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Textarea from './textarea';

export default () => {
  const content = useSelector(state => state.doc.content);
  const dispatch = useDispatch();

  return (
    <div className="editor">
      <Textarea
        content={content}
        onChange={(e) => dispatch({
          type: 'DOC_CONTENT_CHANGED',
          content: e.target.value
        })}
      />
    </div>
  )
}
