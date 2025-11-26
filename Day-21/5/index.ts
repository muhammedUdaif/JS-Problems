// 5. Write a function which calculates sum of unique numbers in an array.

// Test cases:

// Input: [1,2,3,2]
// Output: 4

function sumofUniqueNumbers(arr: number[]) {
    let sum = 0;
    let uniqueNumbers: number[] = [];

    for (let i=0; i< arr.length; i++) {
        for (let j=0; j< arr.length; j++) {
            if (arr[i] === arr[j] && i !== j) {
                break;
            }
            if (j === arr.length -1) {
                uniqueNumbers.push(arr[i]);
                sum += arr[i];
            }
        }
    }
    return sum;
}

console.log(sumofUniqueNumbers([1,2,3,2]));

// test Cases

const testSumOfUniqueNumbers = [
    {input: [1,2,3,2], expected: 4},
    {input: [3,6,2,5,3], expected: 13},
    {input: [12,90,12,3,6], expected: 99},
    {input: [3,23,1,23,4,5], expected: 13},
    {input: [67,67,82,12,12,1], expected: 83}
]

testSumOfUniqueNumbers.forEach((test, index) => {
    const actual = sumofUniqueNumbers(test.input);
    const result = actual === test.expected ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})