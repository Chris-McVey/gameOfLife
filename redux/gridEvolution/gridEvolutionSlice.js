import { createSlice } from '@reduxjs/toolkit'

import { createGrid, getNewGridWithAliveToggled } from '../../client/src/utilityFunctions/gridHelpers.js';
import { getNumberOfAliveNeighbors } from '../../client/src/utilityFunctions/simulationHelpers.js';

const startingGrid = createGrid();

export const gridSlice = createSlice({
  name: 'grid',
  initialState: {
    value: startingGrid
  },
  reducers: {
    simulateGeneration: state => {
      const newGridTest = createGrid();
      const grid = state.value;
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
    state.value = newGridTest
    },
    toggleAlive: (state, action) => {
      const toggledGrid = getNewGridWithAliveToggled(state.value, action.payload.row, action.payload.col);
      state.value = toggledGrid;
    },
  }
})

// Action creators are generated for each case reducer function
export const { simulateGeneration, toggleAlive } = gridSlice.actions

export default gridSlice.reducer