const createNode = (
  row,
  col
) => ({
  col,
  row,
  isAlive: false
});

const createGrid = () => {
  const grid = [];
  for (let row = 0; row < 35; row += 1) {
    const currentRow = [];
    for (let col = 0; col < 75; col += 1) {
      currentRow.push(createNode(row, col));
    }
    grid.push(currentRow);
  }
  return grid;
};

const getNewGridWithAliveToggled = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isAlive: !node.isAlive,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};

export {
  createGrid,
  createNode,
  getNewGridWithAliveToggled
};
