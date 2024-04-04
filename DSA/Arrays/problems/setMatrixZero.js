function setMatrixZero(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const zeroRows = new Set();
  const zeroCols = new Set();

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        zeroRows.add(i);
        zeroCols.add(j);
      }
    }
  }

  zeroRows.forEach(row => {
    for (let j = 0; j < cols; j++) {
      matrix[row][j] = 0;
    }
  });

  zeroCols.forEach(col => {
    for (let i = 0; i < rows; i++) {
      matrix[i][col] = 0;
    }
  });

  return matrix;
}

console.log(
  setMatrixZero([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ]),
);
console.log(
  setMatrixZero([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ]),
);
