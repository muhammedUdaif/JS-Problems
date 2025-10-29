// 1. Write a program that should interpret each array item as a number, and return the sum.

// Test cases:
// Input: [[1,2,3], [0, 7]]
// Expected output: 130 // 123 + 7 = 130

function nestedArray(arr) {
    if(typeof(arr) !== "object") {
        return "The type of the array must be object the other type of the array is not acceptable";
    }
   let sum = 0;
   for(let i=0; i< arr.length; i++) {
       let subArray = arr[i];
       let num = 0;
       for(let j=0; j < subArray.length; j++) {
          num = num * 10 + subArray[j]
       }
       sum += num;
   }
   return sum;
}
console.log(nestedArray("udaif", [0, 7]));

const testNestedArray = [
    {input: [[1,2,3], [0, 7]], expected:  130},
    {input: [[4,5,6], [2, 3]], expected:  479},
    {input: [[3,2,3], [2, 1]], expected:  344},
    {input: [[5,2,3], [0, 7]], expected:  530},
    {input: [[1,4,3], [3, 1]], expected:  174},
    {input: [[2,1,2], [4, 3]], expected:  255},
    {input: [[3,1,3], [1, 2]], expected:  325},
    {input: [[2,2,3], [6, 7]], expected:  290},
    {input: [[1,2,3], [0, 7], [2,3]], expected:  153},
    {input: [[1,2,3]], expected:  123},
    {input: [[1,5,1], [1, 2]], expected:  163},
    {input: [[0,2,0], [0, 0]], expected:  20},
    {input: [[0,0,0], [0, 0]], expected:  0},
    {input: [[], []], expected:  0},
    {input: ["udaif", [0, 7]], expected:  130},
]

testNestedArray.forEach((test, index) => {
    const actual = nestedArray(test.input);
    const result = actual === test.expected ? "Passed" : "Failed";

    console.log(`Test Case ${index + 1} : ${result}`);
})