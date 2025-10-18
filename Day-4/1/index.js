// 1. Write a function to flatten an array of arbitrarily nested arrays into a flat array.

// Test cases:
// Input: [1, [2, [3, [4]], 5]]
// Output: [1, 2, 3, 4, 5]

function flatArray(arr) {
   let arr1 = arr.flat();
   let arr2 = arr1.flat();
   let arr3 = arr2.flat();
   console.log(arr3)
}
flatArray([1, [2, [3, [4]], 5]]);