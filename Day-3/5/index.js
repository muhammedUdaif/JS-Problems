// 5. Write a function which receives 'n' number of number arguments, and it should return their sum. (Note: Arguments can be in any count).

// Test cases:
// Input: 1, 2, 3, 4
// Expected output: 10

// Input: 1, 2 
// Expected output: 3

function sumCount(...nums) {
  if(typeof(nums) !== "number" && typeof(nums) !== "object") {
    return "Accepting input content should be number not other types"
  }
    let sum = 0 ;
  for(let i=0; i< nums.length; i++) {
      sum += nums[i];
  }
  return sum
}
console.log(sumCount(1, 2, 3, 4));

const testSumCount = [
  {input: [1, 2, 3, 4] , expected: 10 },
  {input: [1, 2, 3, 4, 5] , expected: 15 },
  {input: [1, 2, 3, 4, 5, 6] , expected: 21 },
  {input: [1, 2] , expected: 3 },
  {input: [1, 2, 3] , expected: 6},
  {input: [2, 4, 6, 8] , expected: 20 },
  {input: [1, 3, 5, 7] , expected: 16 },
  {input: [10, 20, 30, 40] , expected: 100 },
  {input: [12, 22, 33, 44] , expected: 111 },
  {input: [5, 4, 2, 1] , expected: 12 },
  {input: [13, 12, 3, 14] , expected: 42 },
  {input: [1, 2, 3, 4] , expected: 10 },
  {input: ["1", "2", "3", "4"] , expected: "10" },
  {input: [] , expected: 0 },
  {input: [1] , expected: 1 },
]

testSumCount.forEach((test, index) => {
  const actual = sumCount(...test.input);
  const result = actual === test.expected ? "Passed" : "Failed" ;

  console.log(`Test Case ${index + 1}: ${result}`)
})

