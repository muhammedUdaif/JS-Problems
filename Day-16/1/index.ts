// 1. Write a function DetectSymmetry(matrix) that checks if a given 2D matrix is symmetric horizontally, vertically, or diagonally.
// Return an object with three boolean properties:
// horizontal — true if the matrix reads the same top-to-bottom
// vertical — true if the matrix reads the same left-to-right
// diagonal — true if the matrix equals its diagonal mirror
// (i.e., matrix[i][j] === matrix[j][i])

function DetectSymmetry(matrix: number[][]): {horizondal: boolean, vertical: boolean, diagonal: boolean} {
   let row = matrix.length;
   let col = matrix[0].length;
   
   let horizontal = true;
   let vertical = true;
   let diagonal = true;

   for(let i=0; i< Math.floor(row/2); i++) {
      for(let j=0; j< col; j++) {
        if(matrix[i][j] !== matrix[row -1 -i][j]) {
            horizontal = false;
            break;
        }             
      }
   }

   for(let i = 0; i< row; i++) {
      for(let j = 0; j < Math.floor(col/2); j++) {
        if(matrix[i][j] !== matrix[i][col - 1 - j]) {
           vertical = false;
           break;
        }
      }
   }

   if(row !== col) {
      diagonal = false;
   }else {
    for(let i=0; i < row; i++) {
        for(let j=0; j< col; j++) {
            if(matrix[i][j] !== matrix[j][i]) {
                diagonal = false;
                break;
            }
        }
    }
   }
   
   return {horizondal: horizontal, vertical, diagonal};
}

console.log(DetectSymmetry([[4,2,3,4], [4,2,3,4], [3,3,3,3], [4,4,4,4]]));

const testDetectSymmetry = [
    {input: [[1,1], [1,1]], expected: {horizondal: true, vertical: true, diagonal: true}},
    {input: [[2,1], [3,2]], expected: {horizondal: false, vertical: false, diagonal: false}},
    {input: [[2,1], [4,5], [6,7]], expected: {horizondal: false, vertical: false, diagonal: false}},
]

testDetectSymmetry.forEach((test, index) => {
    const actual = DetectSymmetry(test.input);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})