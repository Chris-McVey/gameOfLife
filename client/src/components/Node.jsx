import React from 'react';

const Node = ({
  row,
  col,
  grid,
  handleToggleAlive,
  isAlive
}) => {
  let extraClassName = '';
  if (isAlive) {
    extraClassName = 'isAlive';
  };

  return (
    <div
      id={`node-${row}-${col}`}
      className={`node ${extraClassName}`}
      role="presentation"
      row={row}
      col={col}
      onClick={() => handleToggleAlive(grid, row, col)}
    />
  );
};

export default Node;
