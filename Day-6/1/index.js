// 1. Rearrange Numbers by Parity

// Description:
// Write a function that takes an array of integers and returns a new array where all even numbers appear first, followed by all odd numbers, while maintaining their relative order.

// Example:
// Input → [3, 2, 4, 1, 5, 8]
// Output → [2, 4, 8, 3, 1, 5]

function numberParity(arr) {
    let result = [];
    for(let num of arr) {
        if(num % 2 === 0) {
            result.push(num);
        }
    }
    for(let num of arr) {
        if( num % 2 !== 0) {
            result.push(num)
        }
    }
    return result;
}
console.log(numberParity([3, 2, 4, 1, 5, 8]));