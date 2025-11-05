// 4. Write a function which takes two strings stringA and stringB, 
// return true if stringA can be constructed by using the letters from stringB and false otherwise.

// Test cases:
// Input: "a", "b"
// Output: false

// Input: "aa", "aab"
// Output: true

function strings(str1, str2) {
    if(typeof(str1) !== "string" || typeof(str2) !== "string") {
        return false;
    }
    for(let i=0; i< str2.length; i++) {
       if(str2.includes(str1[i])) {
        return true;
       }
    }
    return false;
}

console.log(strings("aa", "aab"));

const testStrings = [
    {input1: "a", input2: "b", expected: false },
    {input1: "aa", input2: "aab", expected: true },
    {input1: 1, input2: "aab", expected: false },
    {input1: "aa", input2: 3, expected: false },
    {input1: 2, input2: 4, expected: false },
    {input1: true, input2: "aab", expected: false },
    {input1: [], input2: "aab", expected: false },
    {input1: "aa", input2: function sum(a, b) {return a+ b}, expected: false },
    {input1: undefined, input2: "aab", expected: false },
]

testStrings.forEach((test, index) => {
    const actual = strings(test.input1, test.input2);
    const result = actual === test.expected ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})