// 4. Write a function which accepts two arrays and a position value, where the values of the second array should be placed in the given position of the first array. The function should return an updated array.

// Test cases:
// Input: [1, 2, 3], [4, 5, 6], 2
// Expected output: [1, 2, 4, 5, 6, 3]

function arrayInsertion(arr1, arr2, target) {
   let result = [];
   result.push(...arr1);
   result.push(arr2);
   for(let i=0; i< result.length; i++) {
      if(i === target) {
        let temp;
        temp = result[i];
        result[i] = result[result.length - 1];
        result[result.length - 1] = temp;
      }
   }
   return result.flat()
}
console.log(arrayInsertion([1, 2, 3], [4, 5, 6], 2));

const testArrayInsertion = [
   {input1: [1, 2, 3], input2: [4, 5, 6], input3: 2 , expected: [1, 2, 4, 5, 6, 3] },
   {input1: [1, 2, 3], input2: [4, 5, 6], input3: 0 , expected: [4, 5, 6, 2, 3, 1] },
   {input1: [1, 2, 3], input2: [4, 5, 6], input3: 1 , expected: [1, 4, 5, 6, 3, 2] },
   {input1: [1, 2, 3], input2: [4, 5, 6], input3: 3 , expected: [1, 2, 3, 4, 5, 6] },
   {input1: [1, 2, 3], input2: [4, 5], input3: 0 , expected: [4, 5, 2, 3, 1] },
   {input1: [1, 2, 3], input2: [4, 5], input3: 1 , expected: [1, 4, 5, 3, 2] },
   {input1: [1, 2, 3], input2: [4, 5], input3: 2 , expected: [1, 2, 4, 5, 3] },
   {input1: [1, 2, 3], input2: [4, 5], input3: 3 , expected: [1, 2, 3, 4, 5] },
   {input1: [1, 2], input2: [4, 5, 6], input3: 0 , expected: [4, 5, 6, 2, 1] },
   {input1: [1, 2], input2: [4, 5, 6], input3: 1 , expected: [1, 4, 5, 6, 2] },
   {input1: [1, 2], input2: [4, 5, 6], input3: 2 , expected: [1, 2, 4, 5, 6] },
   {input1: [1, 2, 5, 7], input2: [4, 5, 6], input3: 3 , expected: [1, 2, 5, 4, 5, 6, 7] },
   {input1: [], input2: [4, 5, 6], input3: 0 , expected: [4, 5, 6] },
   {input1: [1, 2, 3], input2: [], input3: 1, expected: [1, 3, 2] },
]

testArrayInsertion.forEach((test, index) => {
   const actual = arrayInsertion(test.input1, test.input2, test.input3);
   const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Passed" : "Failed";

   console.log(`Test Case ${index + 1} : ${result}`);
})