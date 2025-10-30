// 5. Custom Filter Function

// Description:
// Implement your own version of JavaScript's Array.filter() function called myFilter() that works exactly the same.
// Then test it with a condition like "keep only numbers > 10".

function myFilter(arr, callbackFilter) {
    if(typeof(arr) !== "object") {
        return false;
    }
   let result = [];
   for(let i=0; i< arr.length; i++) {
    if(callbackFilter(arr[i])) {
        result.push(arr[i]);
    }
   }
   return result;
}

function callbackFilter(i) {
    return i > 10;
}
console.log(myFilter([41, 42, 3, 45, 46], callbackFilter));

const testMyFilter = [
    {input1: [1,2,4,12,25,30], input2: callbackFilter, expected: [12, 25, 30]},
    {input1: [10, 11, 13, 14, 15], input2: callbackFilter, expected: [11,13,14,15] },
    {input1: [2, 3, 20, 4, 5, 6], input2: callbackFilter, expected:[20]},
    {input1: [5, 6, 7, 8, 30], input2: callbackFilter, expected: [30]},
    {input1: [4, 15, 26, 8, 9], input2: callbackFilter, expected: [15,26] },
    {input1: [11, 12, 13, 15, 6], input2: callbackFilter, expected: [11,12,13,15] },
    {input1: [21, 22, 24, 25, 6], input2: callbackFilter, expected: [21, 22, 24, 25]},
    {input1: [13, 4, 16, 17], input2: callbackFilter, expected: [13, 16, 17] },
    {input1: [41, 42, 3, 45, 46], input2: callbackFilter, expected: [41, 42, 45, 46] },
    {input1: [144, 5, 7, 148], input2: callbackFilter, expected: [144, 148] },
    {input1: [9, 10, 11, 12, 14], input2: callbackFilter, expected: [11, 12, 14] },
    {input1: [6, 7, 8, 10, 11], input2: callbackFilter, expected: [11] },
    {input1: "muhammed udaif", input2: callbackFilter, expected: false},
    {input1: false, input2: callbackFilter, expected: false },
]

testMyFilter.forEach((test, index) =>{
    const actual = myFilter(test.input1, test.input2);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
 })

