// 12. Write a program that finds the maximum product of three numbers in a given list of integers.

// Test cases:
// Input: [1, 2, 3, 4]
// Expected output: 24 (2 _ 3 _ 4)

// Input: [-4, -3, -2, -1, 0]
// Expected output: 0 (0 _ -1 _ -2)

// Input: [-1, -2, -3, -4, -5]
// Expected output: -6 (-2 _ -3 _ -1)

function product(arr) {
    if(typeof(arr) !== "object") {
      return false;
    }
    let n = arr.length;
    if(n < 3) {
        console.log("The array length must contain atleast 3")
    }
    arr.sort((a,b) => a-b)
    const productItem =  arr[n-1] * arr[n-2] * arr[n-3];
  return productItem
}
console.log(product(["-1", "-2", "-3", "-4", "-5"]));

const testProduct = [
  {input: [1, 2, 3, 4], expected: 24},
  {input: [-4, -3, -2, -1, 0], expected: 0},
  {input: [-1, -2, -3, -4, -5], expected: -6},
  {input: [4, 5, 5, 4, 3], expected: 100},
  {input: [3, 4, 1, -2, -4], expected: 12},
  {input: [5, 2, 0, 5, -5], expected: 50},
  {input: [3, 1, 1, -4, -5], expected: 3},
  {input: [0, 4, 5, 6, -5], expected: 120},
  {input: [0, 4, -3, -4, 0], expected: 0},
  {input: [10, 30, 40, -4, -5], expected: 12000},
  {input: [5, -2, -3, -1, -7], expected: 10},
  {input: [4, -2, -3, 0, -5], expected: 0},
  {input: [-12, -23, -3, -4, -5], expected: -60},
  {input: "programing", expected: false},
  {input: 12345, expected: false},
]

testProduct.forEach((test, index) => {
  const actual = product(test.input);
  const result = actual === test.expected ? "Passed" : "Failed";

  console.log(`Test Case ${index + 1} : ${result}`);
})