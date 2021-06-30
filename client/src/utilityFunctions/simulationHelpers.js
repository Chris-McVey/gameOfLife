const getNumberOfAliveNeighbors = (grid, row, col) => {
  let aliveNeighbors = 0;
  //up
  if (row > 0) {
    if (grid[row - 1][col].isAlive) {
      aliveNeighbors++;
    }
  };
  //down
  if (row < grid.length - 1) {
    if (grid[row + 1][col].isAlive) {
      aliveNeighbors++;
    }
  };
  //left
  if (col > 0) {
    if (grid[row][col - 1].isAlive) {
      aliveNeighbors++;
    }
  };
  //right
  if (col < grid[0].length - 1) {
    if (grid[row][col + 1].isAlive) {
      aliveNeighbors++;
    }
  };
  //up-left
  if (row > 0 && col > 0) {
    if (grid[row - 1][col - 1].isAlive) {
      aliveNeighbors++;
    }
  };
  //up-right
  if (row > 0 && col < grid[0].length - 1) {
    if (grid[row - 1][col + 1].isAlive) {
      aliveNeighbors++;
    }
  };
  //down-right
  if (row < grid.length - 1 && col < grid[0].length - 1) {
    if (grid[row + 1][col + 1].isAlive) {
      aliveNeighbors++;
    }
  };
  //down-left
  if (row < grid.length - 1 && col > 0) {
    if (grid[row + 1][col - 1].isAlive) {
      aliveNeighbors++;
    }
  };
  return aliveNeighbors
};

const getNewGameState = (grid) => {

};

export {
  getNumberOfAliveNeighbors,
  getNewGameState
}