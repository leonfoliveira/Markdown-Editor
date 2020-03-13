import React from 'react';
import { useSelector } from 'react-redux';
import { Converter } from 'react-showdown';

import MarkdownArea from './markdownArea';

export default () => {
  const content = useSelector(state => state.doc.content);
  const converter = new Converter({ tables: true, strikethrough: true });

  return (
    <div className="preview">
      <MarkdownArea
        content={converter.convert(content)}
      />
    </div>
  )
}
