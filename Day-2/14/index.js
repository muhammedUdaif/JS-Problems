// 14. Write a program that checks if a given string is a palindrome, ignoring spaces and punctuation.

// Test cases:
// Input: "A man, a plan, a canal, Panama!"
// Expected output: True

// Input: "Racecar"
// Expected output: True

// Input: "Hello, world!"
// Expected output: False

function palindrome(str) {
    if(typeof(str) !== "string") {
        return false;
    }
    str = str.toLowerCase().replace(/[^\w]/g, "");  
   let output = "";
   for(let i =str.length -1 ; i >= 0 ; i--) {
       output += str[i];
   }
  return str === output
}

console.log(palindrome("Hello, world!"));

const testPalindrome = [
    {input: "A man, a plan, a canal, Panama!", expected: true },
    {input: "Racecar", expected: true },
    {input: "Hello, world!", expected: false },
    {input: "Malayalam@#", expected: true },
    {input: "Yedhu", expected: false },
    {input: 1235, expected: false },
    {input: false, expected: false },
    {input: undefined, expected: false },
    {input: Symbol, expected: false },
    {input: [], expected: false },
    {input: function hi(a, b) { console.log(a + b)}, expected: false },
    {input: {}, expected: false },
    {input: "learning", expected: false },
    {input: "growing", expected: false },
    {input: "imaginaiton", expected: false },
]

testPalindrome.forEach((test, index) => {
    const actual = palindrome(test.input);
    const result = actual === test.expected ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1} : ${result}`);
})
