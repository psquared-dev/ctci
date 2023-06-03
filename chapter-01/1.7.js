function createMatrix(size) {
  const matrix = new Array(size).fill(0);

  for (let index = 0; index < matrix.length; index++) {
    matrix[index] = new Array(size).fill(0);
  }

  return matrix;
}

function fillRandom(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = Math.floor(Math.random() * 10);
    }
  }
  return matrix;
}

function transpose(matrix) {
  const newMatrix = structuredClone(matrix);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[i].length; j++) {
      const temp = newMatrix[i][j];
      newMatrix[i][j] = newMatrix[j][i];
      newMatrix[j][i] = temp;
    }
  }

  return newMatrix;
}

function reverseArr(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    // console.log(new Date());
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }

  return arr;
}

function reverseRow(matrix) {
  const newMatrix = structuredClone(matrix);

  for (let index = 0; index < newMatrix.length; index++) {
    newMatrix[index] = reverseArr(newMatrix[index]);
  }

  return newMatrix;
}

const matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

console.log(matrix);
const matrixT = transpose(matrix);
console.log(matrixT);
console.log(reverseRow(matrixT));
