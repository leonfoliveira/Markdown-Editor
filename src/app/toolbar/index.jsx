import React from 'react';
import { useDispatch } from 'react-redux';

import './style.css';

import Button from './button';
import { addMark } from '../actions';

export default () => {
  const dispatch = useDispatch();

  return (
    <div className="toolbar">
      <Button onClick={() => dispatch(addMark(' **bold** '))} icon="bold"/>
      <Button onClick={() => dispatch(addMark(' *italic* '))} icon="italic"/>
      <Button onClick={() => dispatch(addMark(' ~~strike~~ '))} icon="strikethrough"/>
      <Button onClick={() => dispatch(addMark('\n> "quote"'))} icon="quote-right"/>
      <Button onClick={() => dispatch(addMark('\n# H1'))}>H1</Button>
      <Button onClick={() => dispatch(addMark('\n## H2'))}>H2</Button>
      <Button onClick={() => dispatch(addMark('\n### H3'))}>H3</Button>
      <Button onClick={() => dispatch(addMark('\n#### H4'))}>H4</Button>
      <Button onClick={() => dispatch(addMark('\n##### H5'))}>H5</Button>
      <Button onClick={() => dispatch(addMark('\n###### H6'))}>H6</Button>
      <Button onClick={() => dispatch(addMark('\n| A | B |\n|---|---|\n| 1 | 2 |'))} icon="table" />
      <Button onClick={() => dispatch(addMark('\n- list\n- list\n- list'))} icon="list-ul" />
      <Button onClick={() => dispatch(addMark("\n```javascript\nconsole.log('code')\n```"))} icon="code" />
      <Button onClick={() => dispatch(addMark('\n[link](http://www.github.com)'))} icon="link" />
      <Button onClick={() => dispatch(addMark('\n![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Imagem Title")'))} icon="image" />
    </div>
  )
}
