// 12. Write a program that finds the maximum product of three numbers in a given list of integers.

// Test cases:
// Input: [1, 2, 3, 4]
// Expected output: 24 (2 _ 3 _ 4)

// Input: [-4, -3, -2, -1, 0]
// Expected output: 0 (0 _ -1 _ -2)

// Input: [-1, -2, -3, -4, -5]
// Expected output: -6 (-2 _ -3 _ -1)

function product(arr) {
    let n = arr.length;
    if(n < 3) {
        console.log("The array length must contain atleast 3")
    }
    arr.sort((a,b) => a-b)
    const productItem =  arr[n-1] * arr[n-2] * arr[n-3];
  return productItem
}
console.log(product([-1, -2, -3, -4, -5]));