// 2. Write a function that rotates an array by k steps. 

// Test cases:

// Input: [1,2,3,4,5], k=2
// Output: [4,5,1,2,3]

function rotateArray(arr: number[], k: number) {
    let n = arr.length;
    k = k % n;
    let rotateArrayd: number[] = [];

    for (let i = n - k; i < n; i++) {
        rotateArrayd.push(arr[i]);
    }

    for (let i=0; i < n - k; i++) {
        rotateArrayd.push(arr[i]);
    }

    return rotateArrayd;
}

console.log(rotateArray([1,2,3,4,5], 2))

// test cases

const testRotateArray = [
    {input1: [1,2,3,4,5], input2: 2, expected: [4,5,1,2,3] },
    {input1: [10,20,30,40,50,60], input2: 3, expected: [40,50,60,10,20,30]},
    {input1: [7,8,9,10], input2: 1, expected: [10,7,8,9]},
    {input1: [1,2,3], input2: 4, expected: [3,1,2]},
    {input1: [5,6,7,8,9], input2: 0, expected: [5,6,7,8,9]}
]

testRotateArray.forEach((test, index) => {
    const actual = rotateArray(test.input1, test.input2);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})