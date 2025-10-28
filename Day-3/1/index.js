// 1. Write a program that should interpret each array item as a number, and return the sum.

// Test cases:
// Input: [[1,2,3], [0, 7]]
// Expected output: 130 // 123 + 7 = 130

function nestedArray(arr) {
   let sum = 0;
   for(let i=0; i< arr.length; i++) {
       let subArray = arr[i];
       let num = 0;
       for(let j=0; j < subArray.length; j++) {
          num = num * 10 + subArray[j]
       }
       sum += num;

   }
   return sum;
}
console.log(nestedArray([[1,2,3], [0, 7]]));

const testNestedArray = [
    {input: [[1,2,3], [0, 7]], expected:  130},
    {input: [[4,5,6], [1, 7]], expected:  473},
    {input: [[1,2,3], [0, 7]], expected:  130},
    {input: [[1,2,3], [0, 7]], expected:  130},
    {input: [[1,2,3], [0, 7]], expected:  130},
    {input: [[1,2,3], [0, 7]], expected:  130},
    {input: [[1,2,3], [0, 7]], expected:  130},
    {input: [[1,2,3], [0, 7]], expected:  130},
    {input: [[1,2,3], [0, 7]], expected:  130},
    {input: [[1,2,3], [0, 7]], expected:  130},
    {input: [[1,2,3], [0, 7]], expected:  130},
    {input: [[1,2,3], [0, 7]], expected:  130},
    {input: [[1,2,3], [0, 7]], expected:  130},
    {input: [[1,2,3], [0, 7]], expected:  130},
    {input: [[1,2,3], [0, 7]], expected:  130},
]

testNestedArray.forEach((test, index) => {
    const actual = nestedArray(test.input);
    const result = actual === test.expected ? "Passed" : "Failed";

    console.log(`Test Case ${index + 1} : ${result}`);
})