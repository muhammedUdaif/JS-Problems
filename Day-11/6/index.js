// 1. Find the highest increasing ordered chain in the given input of numbers. The order of the input should not be changed.
//  Maximum input length can be 50.
// Test cases:
// Input: [10, 20, 15, 30, 22, 400]
// Output: [10, 15, 22, 40] or [10, 20, 30, 40] or [10, 15, 30, 40]
// input: [6, 9, 2, 0, 5, 7, 8, 2, 8]
// Output: [2, 5, 7, 8] or [0, 5, 7, 8]

function highOrder(arr) {
    let result = [];
    let largest = arr[0];
    result.push(largest);
    for(let i=0; i< arr.length; i++) {
        if(arr[i] > largest) {
            result.push(arr[i])
            largest = arr[i];
        }
    }
    return result
}
console.log(highOrder([6, 9, 2, 0, 5, 7, 8, 2, 8]));