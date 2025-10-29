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

console.log(transposeMatrix([ [2, 9, 0],[7, 1, 5] ]));


const testTransposeMatrix = [
  {input: [ [2, 9, 0], [7, 1, 5] ], expected: [ [2, 7], [9, 1],[0, 5] ]},
  {input: [ [9, 2, 0], [7, 1, 5] ], expected: [ [9, 7], [2, 1],[0, 5] ]},
  {input: [ [0, 9, 2], [7, 1, 5] ], expected: [ [0, 7], [9, 1],[2, 5] ]},
  {input: [ [2, 0, 9], [7, 1, 5] ], expected: [ [2, 7], [0, 1],[9, 5] ]},
  {input: [ [2, 9, 0], [1, 5, 7] ], expected: [ [2, 1], [9, 5],[0, 7] ]},
  {input: [ [2, 9, 0], [5, 1, 7] ], expected: [ [2, 5], [9, 1],[0, 7] ]},
  {input: [ [2, 9, 0], [7, 5, 1] ], expected: [ [2, 7], [9, 5],[0, 1] ]},
  {input: [ [2, 9, 0], [5, 7, 1] ], expected: [ [2, 5], [9, 7],[0, 1] ]},
  {input: [ [7, 1, 5], [2, 9, 0] ], expected: [ [7, 2], [1, 9],[5, 0] ]},
  {input: [ [5, 7, 1], [9, 0, 2] ], expected: [ [5, 9], [7, 0],[1, 2] ]},
  {input: [ [1, 5, 7], [0, 2, 9] ], expected: [ [1, 0], [5, 2],[7, 9] ]},
  {input: [ [1, 2, 3], [4, 5, 6] ], expected: [ [1, 4], [2, 5],[3, 6] ]},
  {input: [ [4, 6, 5], [3, 1, 2] ], expected: [ [4, 3], [6, 1],[5, 2] ]},
  {input: [ [2, 9, 0, 4], [7, 1, 5] ], expected: [ [2, 7], [9, 1],[0, 5], [4, ] ]},
  {input: [ "udaif", [7, 1, 5] ], expected: false},
]

testTransposeMatrix.forEach((test, index) => {
  const actual = transposeMatrix(test.input);
  const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Passed" : "Failed";

  console.log(`Test Case ${index + 1}: ${result}`);
})