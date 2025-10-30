// 7. Flatten Nested Arrays

// Description:
// Without using .flat(), write a recursive function to flatten an array of arbitrary depth.

// Example:
// Input → [1, [2, [3, [4]], 5]]
// Output → [1, 2, 3, 4, 5]

function flatArray(arr) {
  if(typeof(arr) !== "object") {
    return false;
  }
   let result = [];
   function nestedFlatArray(subarr) {
      for(let i=0; i< subarr.length; i++) {
        if(Array.isArray(subarr[i])) {
            nestedFlatArray(subarr[i]);
        }else {
            result[result.length] = subarr[i];
        }
      }
   }
   nestedFlatArray(arr);
   return result;
}
console.log(flatArray([1, [2, [3, [4]], 5]]));

const testFlatArray = [
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
  const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

  console.log(`Test Case ${index + 1}: ${result}`);
})