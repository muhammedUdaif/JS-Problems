// 1. Write a function to flatten an array of arbitrarily nested arrays into a flat array.

// Test cases:
// Input: [1, [2, [3, [4]], 5]]
// Output: [1, 2, 3, 4, 5]

function flatArray(arr) {
   if(typeof(arr) !== "object") {
      return false;
   }
   let arr1 = arr.flat();
   let arr2 = arr1.flat();
   let arr3 = arr2.flat();
   return arr3;
}
console.log(flatArray([[1], [2, [3, [4]], [5]]]));

// test case

const testFlatArray = [
   {input: [2, [3, [4, [1]], 5]], expected: [2, 3, 4, 1, 5]},
   {input: [3, [1, [2, [5]], 4]], expected: [3, 1, 2, 5, 4]},
   {input: [4, [2, [3, [1]], 5]], expected: [4, 2, 3, 1, 5]},
   {input: [5, [3, [4, [2]], 1]], expected: [5, 3, 4, 2, 1]},
   {input: [6, [2, [8, [4]], 10]], expected: [6, 2, 8, 4, 10]},
   {input: [[1], [2, [3, [4]], [5]]], expected: [1, 2, 3, 4, 5]},
   {input: [1, 2, [3, [4]], 5], expected: [1, 2, 3, 4, 5]},
   {input: [1, [2, 3, [4], 5]], expected: [1, 2, 3, 4, 5]},
   {input: [1, 2, [3, [4]], 5], expected: [1, 2, 3, 4, 5]},
   {input: [1, [[2], [3, [4]], 5]], expected: [1, 2, 3, 4, 5]},
   {input: [[1], [[2], [3, [4]], [5]]], expected: [1, 2, 3, 4, 5]},
   {input: [[1], [2], [3], [4], [5]], expected: [1, 2, 3, 4, 5]},
   {input: [[1, 2], [3, 4], 5], expected: [1, 2, 3, 4, 5]},
   {input: "1,3,3,5", expected: false},
   {input: true, expected: false},
]

testFlatArray.forEach((test, index) => {
   const actual = flatArray(test.input);
   const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Passed" : "Failed";

   console.log(`Test Case ${index + 1}: ${result}`);
})