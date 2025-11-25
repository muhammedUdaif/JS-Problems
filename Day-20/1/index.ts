// Remove Duplicates from an Array Without Using Set
// Return a new array with unique values.

function removeDuplicateArray(arr: number[]): number[] {
    let result:number[] = []
    for(let i=0; i< arr.length; i++) {
        if(!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(removeDuplicateArray([2,3,2,6,3,2,1,4]));

// test cases

const testRemoveDuplicateArray = [
    {input: [2,3,2,6,3,2,1,4], expected: [2,3,6,1,4]},
    {input: [4,3,1,5,3,4,1,2], expected: [4,3,1,5,2]},
    {input: [6,1,2,3,1,2,3,6], expected: [6,1,2,3]},
    {input: [3,2,3,2,1,1,4], expected: [3,2,1,4]}
]

testRemoveDuplicateArray.forEach((test, index) => {
    const actual = removeDuplicateArray(test.input);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Passed" : "Failed";

    console.log(`Test Case ${index + 1}: ${result}`);
})