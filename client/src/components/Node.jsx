import React from 'react';

const Node = ({
  row,
  col,
  onMouseDown,
  onMouseEnter,
  onMouseUp,
  grid,
  mouseIsPressed
}) => {
  let extraClassName = '';

  return (
    <div
      id={`node-${row}-${col}`}
      className={`node ${extraClassName}`}
      role="presentation"
      row={row}
      col={col}
    />
  );
};

export default Node;
