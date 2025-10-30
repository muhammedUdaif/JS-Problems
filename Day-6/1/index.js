// 1. Rearrange Numbers by Parity

// Description:
// Write a function that takes an array of integers and returns a new array where all even numbers appear first, followed by all odd numbers, while maintaining their relative order.

// Example:
// Input → [3, 2, 4, 1, 5, 8]
// Output → [2, 4, 8, 3, 1, 5]

function numberParity(arr) {
    if(typeof(arr) !== "object") {
        return false;
    }
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
console.log(numberParity([5, 1, 7, 2, 5, 2]));

const testNumberParity = [
    {input: [3, 2, 4, 1, 5, 8], expected: [2, 4, 8, 3, 1, 5] },
    {input: [5, 1, 7, 2, 5, 2], expected: [2, 2, 5, 1, 7, 5] },
    {input: [1, 2, 3, 4, 5, 6], expected: [2,4,6,1,3,5]},
    {input: [7, 8, 9, 10, 11, 12], expected: [8,10,12,7,9,11]},
    {input: [2, 4, 1, 6, 3, 8, 10], expected: [2, 4, 6, 8, 10, 1, 3]},
    {input: [1, 2, 3], expected: [2, 1, 3]},
    {input: [3, 4, 5, 6], expected: [4, 6, 3, 5]},
    {input: [1, 4, 5, 6], expected: [4, 6, 1, 5]},
    {input: [7, 8, 9, 10, 11], expected: [8, 10, 7, 9, 11]},
    {input: [7, 8, 9, 10], expected: [8, 10, 7, 9]},
    {input: [9, 10, 11, 12], expected: [10, 12, 9, 11]},
    {input: [7, 8, 9, 11, 12], expected: [8, 12, 7, 9, 11]},
    {input: [2, 1, 4, 6], expected: [2, 4, 6, 1]},
    {input: "udaif", expected: false},
    {input: 12345, expected: false},
]

testNumberParity.forEach((test, index) => {
    const actual = numberParity(test.input);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`)
});