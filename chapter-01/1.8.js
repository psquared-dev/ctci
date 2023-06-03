const matrix = [
  [1, 2, 3, 4],
  [5, 3, 2, 9],
  [5, 3, 2, 9],
  [5, 2, 0, 9],
  [5, 3, 2, 9],
];

const zeroIndex = [3, 2];

function zeroMatrix(matrix, zeroIndex) {
  //  make row zero
  matrix[zeroIndex[0]] = new Array(matrix[0].length).fill(0);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (j === zeroIndex[1]) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
}

console.log(zeroMatrix(matrix, zeroIndex));
