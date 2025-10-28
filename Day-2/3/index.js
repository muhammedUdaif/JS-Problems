// 3. Write a program that takes a list of integers as input and returns a new list with only the even numbers.

// Test cases:
// Input: [1, 2, 3, 4, 5, 6]
// Expected output: [2, 4, 6]

// Input: [7, 8, 9, 10, 11, 12]
// Expected output: [8, 10, 12]

// Input: [2, 4, 6, 8, 10]
// Expected output: [2, 4, 6, 8, 10]

function arrEven(arr) {
    let result = [];
    for(let i=0; i< arr.length; i++){
       if(arr[i] % 2 === 0){
         result.push(arr[i]);
       }
    }
    return result
}

console.log(arrEven([1, 2, 3, 4, 5, 6]));

// test case 

const testArrEven = [
  {input: [1, 2, 3, 4, 5, 6], expected: [2,4,6]},
  {input: [7, 8, 9, 10, 11, 12], expected: [8, 10, 12]},
  {input: [2, 4, 6, 8, 10], expected: [2, 4, 6, 8, 10]},
  {input: [1, 2, 3], expected: [2]},
  {input: [3, 4, 5, 6], expected: [4,6]},
  {input: [1, 4, 5, 6], expected: [4,6]},
  {input: [7, 8, 9, 10, 11], expected: [8, 10]},
  {input: [7, 8, 9, 10], expected: [8, 10]},
  {input: [9, 10, 11, 12], expected: [10, 12]},
  {input: [7, 8, 9, 11, 12], expected: [8,12]},
  {input: [2, 4, 6], expected: [2, 4, 6]},
  {input: [2, 4, 6, 8], expected: [2, 4, 6, 8]},
  {input: [6, 8, 10], expected: [6, 8, 10]},
  {input: [2, 4, 8, 10], expected: [2, 4, 8, 10]},
  {input: [11,23,45,12], expected: [12]},
]


testArrEven.forEach((test, index) => {
  const actual = arrEven(test.input);
  const result1 = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Passed" : "Failed";

  console.log(`Test Case ${index + 1}: ${result1}`);
})