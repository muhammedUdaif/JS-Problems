// 1. Write a program that should interpret each array item as a number, and return the sum.

// Test cases:
// Input: [[1,2,3], [0, 7]]
// Expected output: 130 // 123 + 7 = 130

function nestedArray(arr) {
   let sum = 0;
   let newArray = arr.flat();
   console.log(newArray);
   for(let i=0; i< newArray.length; i++) {
       sum += newArray[i] * 10;

   }
   return sum;
}
console.log(nestedArray([[1,2,3], [0, 7]]))