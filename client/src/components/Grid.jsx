import React from 'react';

import Node from './Node.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../../../redux/counter/counterSlice.js';
import { toggleAlive, simulateGeneration } from '../../../redux/gridEvolution/gridEvolutionSlice.js';


const Grid = () => {
  const count = useSelector(state => state.counter.value);
  const gridRedux = useSelector(state => state.grid.value);
  const dispatch = useDispatch();

  const handleToggleAlive = (row, col) => {
    dispatch(toggleAlive({
      row,
      col
    }));
  };

  const simulateOneGeneration = () => {
    dispatch(simulateGeneration());
    dispatch(increment());
  };

  const beginSimulation = () => {
    setInterval(() => {
      simulateOneGeneration();
    }, 200);
  };

  return (
    <>
    <button onClick={() => simulateOneGeneration()} >Advance one tick</button>
    <button onClick={() => beginSimulation()} >Start simulation</button>
    <div>Generation: {count}</div>
    <div className="grid">
      {gridRedux.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((node, nodeIndex) => {
            const { row, col, isAlive } = node;
            return (
              <Node
                key={nodeIndex}
                row={row}
                col={col}
                isAlive={isAlive}
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
