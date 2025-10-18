// 3.Write a program to convert a given matrix into its transpose.

// Test cases:
// Input: [ [2, 9, 0], 
//          [7, 1, 5] ]
// Output: [ [2, 7], 
//           [9, 1],
//           [0, 5] ]

function transposeMatrix(matrix) {
  let rows = matrix.length;
  let columns = matrix[0].length;

  let result = [];
  for(let i = 0; i < columns; i++) {
    result[i] = [];
    for(let j = 0; j < rows; j++) {
      result[i][j] = matrix[j][i];
    }
  }
  return result;
}

console.log(transposeMatrix([ [2, 9, 0], 
                              [7, 1, 5] ]));

