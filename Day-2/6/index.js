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
        console.log(arr[i])
        sum += arr[i];
      }
   }
   return sum
}
console.log(itemSum([15, 25, 35, 45, 55]));