// 13. Write a program that takes a list of strings as input and returns the longest word among them.

// Test cases:
// Input: ["cat", "dog", "elephant", "tiger"]
// Expected output: "elephant"

// Input: ["apple", "banana", "orange"]
// Expected output: "banana"

// Input: ["programming", "is", "fun"]
// Expected output: "programming"

function logestWord(arr) {
    let longest = "";
   for(let i = 0; i<arr.length; i++) {
       if(arr[i].length > longest.length) {
           longest = arr[i]
       }
   }
   return longest;
}
console.log(logestWord(["programming", "is", "fun"]));

const testLogestWord = [
    {input:["cat", "dog", "elephant", "tiger"], expected: "elephant"},
    {input:["apple", "banana", "orange"], expected: "banana"},
    {input:["programming", "is", "fun"], expected: "programming"},
    {input:["java", "javascript", "react"], expected: "javascript"},
    {input:["wayanad", "kozhikode", "kottayam"], expected: "kozhikode"},
    {input:["programing", "debugging", "testing"], expected: "programing"},
    {input:["enjoying", "learning", "everytime"], expected: "everytime"},
    {input:["daily", "status", "reports"], expected: "reports"},
    {input:["consectetur", "dolor", "Lorem"], expected: "consectetur"},
    {input:["adipisicing", "elit", "rerum"], expected: "adipisicing"},
    {input:["mollitia", "cum", "quo"], expected: "mollitia"},
    {input:["placeat", "dolores", "dignissimos"], expected: "dignissimos"},
    {input:["voluptate", "minima", "nam"], expected: "voluptate"},
    {input:[1, 2, 388], expected: 388},
    {input:123, expected: 123},
]

testLogestWord.forEach((test, index) => {
    const actual = logestWord(test.input);
    const result = actual === test.expected ? "Passed" : "Failed";

    console.log(`Test Case ${index + 1} : ${result}`)
})