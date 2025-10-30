// 1. Find the highest increasing ordered chain in the given input of numbers. The order of the input should not be changed.
//  Maximum input length can be 50.
// Test cases:
// Input: [10, 20, 15, 30, 22, 400]
// Output: [10, 15, 22, 40] or [10, 20, 30, 40] or [10, 15, 30, 40]
// input: [6, 9, 2, 0, 5, 7, 8, 2, 8]
// Output: [2, 5, 7, 8] or [0, 5, 7, 8]

function highOrder(arr) {
    let longest = [];

    function helper(start, seq) {
        if (seq.length > longest.length) {
            longest = [...seq];
        }
        for (let i = start; i < arr.length; i++) {
            if (seq.length === 0 || arr[i] > seq[seq.length - 1]) {
                helper(i + 1, [...seq, arr[i]]);
            }
        }
    }
    
    helper(0, []);
    return longest;
}

console.log(highOrder([10, 20, 15, 30, 22, 40])); 
console.log(highOrder([6, 9, 2, 0, 5, 7, 8, 2, 8])); 

const testHighOrder = [
    {input: [10, 20, 15, 30, 22, 40], expected:[ 10, 20, 30, 40 ] },
    {input: [6, 9, 2, 0, 5, 7, 8, 2, 8], expected:[  ] },
]

testHighOrder.forEach((test, index) => {
    const actual = highOrder(test.input);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})


