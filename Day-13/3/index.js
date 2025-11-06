// 3. Write a program which returns a 2D array, like a square matrix of given order. 
// The matrix should be filled with natural numbers, starting from 1 in the top-left corner, 
// increasing in an inward, clockwise spiral order, like these examples:

// Test cases:
// Input: 3
// Output:
// [
//  [1, 2, 3],
//  [8, 9, 4],
//  [7, 6, 5]
// ]

function spiralMatrix(n) {
    let result = [];
   for(let i=0; i< n*n; i++) {
       for(let j=1; j<= n; j++) {
          let input = [];
        result.push(input[j]);
      }
   }
   return result
}

console.log(spiralMatrix(3))