// 8. Write a program that finds the missing number in an array containing consecutive integers from 1 to n, with one number missing.

// Test cases:
// Input: [1, 2, 3, 5, 6]
// Expected output: 4

// Input: [10, 11, 13, 14, 15]
// Expected output: 12

// Input: [2, 3, 4, 5, 6]
// Expected output: 1
function missingElement(arr) {
    if(typeof(arr) !== "object") {
        return false;
    }
   for(let i=0; i< arr.length ; i++){
    if(arr[i + 1] - arr[i] !== 1){
        return arr[i] + 1;
    }else if(arr[0] - 1 === 1) {
        return 1;
    }
   }
   return null;
}
console.log(missingElement([1, 2, 3, 5, 6]));

const testMissingElement = [
    {input: [1, 2, 3, 5, 6], expected: 4 },
    {input: [10, 11, 13, 14, 15], expected: 12 },
    {input: [2, 3, 4, 5, 6], expected:1},
    {input: [5, 6, 7, 8, 10], expected: 9},
    {input: [4, 5, 6, 8, 9], expected: 7 },
    {input: [11, 12, 13, 15, 16], expected: 14 },
    {input: [21, 22, 24, 25, 26], expected: 23 },
    {input: [13, 14, 16, 17], expected: 15 },
    {input: [41, 42, 43, 45, 46], expected: 44 },
    {input: [144, 145, 147, 148], expected: 146 },
    {input: [9, 10, 11, 12, 14], expected: 13 },
    {input: [6, 7, 8, 10, 11], expected: 9 },
    {input: "muhammed udaif", expected: false },
    {input: false, expected: false },
]

testMissingElement.forEach((test, index) => {
    const actual = missingElement(test.input);
    const result = actual === test.expected ? "Passed" : "Failed";

    console.log(`Test Case ${index + 1} : ${result}`);
})