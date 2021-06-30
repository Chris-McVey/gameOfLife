import React, { useState, useEffect } from 'react';

import Node from './Node.jsx';
import { createGrid, getNewGridWithAliveToggled } from '../utilityFunctions/gridHelpers.js';

const Grid = () => {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    const startingGrid = createGrid();
    setGrid(startingGrid);
  }, []);

  const handleToggleAlive = (grid, row, col) => {
    const newGrid = getNewGridWithAliveToggled(grid, row, col);
    setGrid(newGrid);
  };

  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((node, nodeIndex) => {
            const { row, col, isAlive } = node;
            return (
              <Node
                key={nodeIndex}
                row={row}
                col={col}
                isAlive={isAlive}
                grid={grid}
                handleToggleAlive={handleToggleAlive}
              />
            );
          })}
        </div>
      ))}
    </div>
  )
};

export default Grid;
