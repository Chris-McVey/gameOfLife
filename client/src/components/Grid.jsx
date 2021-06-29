import React, { useState, useEffect } from 'react';

import Node from './Node.jsx';
import { createGrid } from '../utilityFunctions/gridHelpers.js';

const Grid = () => {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    const startingGrid = createGrid();
    setGrid(startingGrid);
  }, []);

  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((node, nodeIndex) => {
            const { row, col } = node;
            return (
              <Node
                key={nodeIndex}
                row={row}
                col={col}
                isAlive={false}
                grid={grid}
              />
            );
          })}
        </div>
      ))}
    </div>
  )
};

export default Grid;
