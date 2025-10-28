// 6. Write a program that takes a list of integers as input and returns the sum of all the numbers divisible by 3.

// Test cases:
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Expected output: 18 (3 + 6 + 9)

// Input: [10, 20, 30, 40, 50]
// Expected output: 60 (30 + 30)

// Input: [15, 25, 35, 45, 55]
// Expected output: 105 (15 + 35 + 55)

function itemSum(arr) {
    let sum = 0;
   for(let i=0; i< arr.length; i++){
      if(arr[i] % 3 === 0) {
        sum += arr[i];
      }
   }
   return sum
}
console.log(itemSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

const testItemSum = [
   {input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], expected: 18},
   {input: [10,20,30,40,50], expected: 30},
   {input: [1, 2, 3, 4, 5], expected: 3},
   {input: [5, 6, 7, 8, 9], expected: 15},
   {input: [11, 12, 13, 14, 15], expected: 27},
   {input: [2, 4, 6, 8, 10], expected: 6},
   {input: [1, 3, 5, 7, 9], expected: 12},
   {input: [2, 5, 3, 15, 10], expected: 18},
   {input: [6, 24, 5, 4, 16], expected: 30},
   {input: [5, 10, 15, 25, 35], expected: 15},
   {input: "muhammed udaif", expected: 60},
   {input: true, expected: 60},
   {input: [10, 20, 30, 40, 50], expected: 30},
   {input: ["15", "25", "35", "45", "55"], expected: 60},
   {input: [15, 25, 35, 45, 55], expected: 60},
]

testItemSum.forEach((test, index) => {
   const actual = itemSum(test.input);
   const result = actual === test.expected ? "Passed" : "Failed";

   console.log(`Test Case ${index + 1}: ${result}`);
})