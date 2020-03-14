import React from 'react';

import Button from './button';

export default () => {
  return (
    <div className="toolbar">
      <Button icon="bold" />
      <Button icon="italic" />
      <Button icon="strikethrough" />
      <Button icon="quote-right" />
      <Button>H1</Button>
      <Button>H2</Button>
      <Button>H3</Button>
      <Button>H4</Button>
      <Button>H5</Button>
      <Button>H6</Button>
      <Button icon="table" />
      <Button icon="list-ul" />
      <Button icon="code" />
      <Button icon="link" />
      <Button icon="image" />
    </div>
  )
}
