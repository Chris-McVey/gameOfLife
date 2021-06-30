import React, { useState, useEffect } from 'react';

import Node from './Node.jsx';
import { createGrid, getNewGridWithAliveToggled } from '../utilityFunctions/gridHelpers.js';
import { getNumberOfAliveNeighbors } from '../utilityFunctions/simulationHelpers.js';
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

  const beginSimulation = (grid) => {
    const newGridTest = createGrid();
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col].isAlive) {
          if (getNumberOfAliveNeighbors(grid, row, col) < 2) {
            newGridTest[row][col].isAlive = false;
          } else if (getNumberOfAliveNeighbors(grid, row, col) > 3) {
            newGridTest[row][col].isAlive = false;
          } else {
            newGridTest[row][col].isAlive = true;
          }
        } else {
          if (getNumberOfAliveNeighbors(grid, row, col) === 3) {
            newGridTest[row][col].isAlive = true;
          }
        }
      }
    }

    setGrid(newGridTest);
  };

  return (
    <>
    <button onClick={() => beginSimulation(grid)} >Advance one tick</button>
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
    </>
  )
};

export default Grid;
