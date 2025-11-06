// 2. Write a function, given a sorted array of distinct integers and a target value, 
// return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// Test cases:
// Input: [1,3,5,6], 5
// Output: 2

// Input: [1,3,5,6], 2
// Output: 1

function sortedIndex(arr, target) {
    if(typeof(arr) !== "object" || typeof(target) !== "number") {
        return false;
    }
    for(let i=0; i< arr.length; i++) {
        if(arr[i] === target ) {
            return i;
        }
    }

    for(let j=0; j< arr.length; j++) {
        if(arr[j + 1] - arr[j] !== 1){
            return j + 1;
        }
    }
}

console.log(sortedIndex([1,3,5,6], 2));

const testSortedIndex = [
    {input1: [1,3,5,6], input2: 5, expected: 2 },
    {input1: [1,3,5,6], input2: 2, expected: 1 },
    {input1: 17491, input2: 5, expected: false },
    {input1: undefined, input2: 5, expected: false },
    {input1: true, input2: 5, expected: false },
    {input1: [1,3,5,6], input2: undefined, expected: false },
    {input1: [1,3,5,6], input2: [4, 3, 6, 7], expected: false },
    {input1: "ahiruebi", input2: 5, expected: false },
]

testSortedIndex.forEach((test, index) => {
    const actual = sortedIndex(test.input1, test.input2);
    const result = actual === test.expected ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})