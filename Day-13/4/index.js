// 4. Write a program which takes an array of numbers as input and interprets it as a number, 
// adds one to it, returns back as an array of numbers.

// Test cases:
// Input: [1,2,3]
// Output: [1,2,4]

// Input: [9]
// Output: [1,0]

function arrayNumber(arr) {
    if(typeof(arr) !== "object") {
        return false;
    }
   const resultNum = Number(arr.join(''));
   const output = resultNum + 1;
   const resultArray = Array.from(String(output), Number);
   
   return resultArray;
}

console.log(arrayNumber([1,2,3]))


const testArrayNumber = [
    {input: [1,2,3], expected: [1,2,4] },
    {input: [9], expected: [1,0] },
    {input: false, expected: false },
    {input: undefined, expected: false },
    {input: "hfaiuf", expected: false },
    {input: 18937, expected: false },
]

testArrayNumber.forEach((test, index) => {
    const actual = arrayNumber(test.input);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass": "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})