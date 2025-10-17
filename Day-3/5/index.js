// 5. Write a function which receives 'n' number of number arguments, and it should return their sum. (Note: Arguments can be in any count).

// Test cases:
// Input: 1, 2, 3, 4
// Expected output: 10

// Input: 1, 2 
// Expected output: 3

function sumCount(...nums) {
    let sum = 0 ;
  for(let i=0; i< nums.length; i++) {
      sum += nums[i];
  }
  return sum
}
console.log(sumCount(1, 2 ));