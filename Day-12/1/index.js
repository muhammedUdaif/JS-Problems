// 1. Write a function to remove all the falsy values from the given array.

// Test cases:
// Input: [54, false, null, 9, "HI", 0]
// Output; [54, 9, "HI"]

function removeFalsy(arr) {
    let result = arr.filter((item) => item !== false && item !== null && item !== 0 && item !== -0 && item !== 0n && item !== undefined && item !== "")
    return result;
}

console.log(removeFalsy([54, false, null, 9, "HI", "", 0]));

// test case 

const testRemoveFalsy = [
    {input: [54, false, null, 9, "HI", 0], expected : [54, 9, "HI"]},
    {input: [54, false, "", null, 9, "HI", 0], expected : [54, 9, "HI"]},
    {input: [54, false, 0, null, 9, "HI", 0], expected : [54, 9, "HI"]},
    {input: [54, undefined, false, null, 9, "HI", 0], expected : [54, 9, "HI"]},
    {input: [54, -0, false, null, 9, "HI", 0], expected : [54, 9, "HI"]},
    {input: [54, 0n, false, null, 9, "HI", 0], expected : [54, 9, "HI"]}
]

testRemoveFalsy.forEach((test, index) => {
    const actual = removeFalsy(test.input);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`)
})