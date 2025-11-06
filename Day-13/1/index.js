// 1. Write a function which takes an array of integers and an target. 
// Return indices of the two numbers such that they add up to target, -1 if not found.

// Test cases:
// Input: [2,7,11,15], 9
// Output: [0,1]

function arrayTarget(arr, target) {
    if(typeof(arr) !== "object") {
        return false;
    }
    for(let i=0; i< arr.length; i++) {
        for(let j= i + 1; j< arr.length; j++) {
            if(arr[i] + arr[j] === target) {
               return [i, j];
            }
        }
    }
    return -1;
}

console.log(arrayTarget([2,7,11,15], 9));

const testArrayTarget = [
    {input1:[2,7,11,15], input2: 9, expected: [0,1]},
    {input1:[2,3,11,15], input2: 14, expected: [1,2]},
    {input1:[3,15,11,7], input2: 10, expected: [0,3]},
    {input1:[2,7,11,15], input2: 15, expected: -1},
    {input1: "hfaunkn", input2: 9, expected: false},
    {input1: undefined, input2: 9, expected: false},
    {input1: 37436, input2: 9, expected: false},
]

testArrayTarget.forEach((test, index) => {
    const actual = arrayTarget(test.input1, test.input2);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1} : ${result}`);
})