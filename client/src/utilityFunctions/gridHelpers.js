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
  for (let row = 0; row < 20; row += 1) {
    const currentRow = [];
    for (let col = 0; col < 50; col += 1) {
      currentRow.push(createNode(row, col));
    }
    grid.push(currentRow);
  }
  return grid;
};