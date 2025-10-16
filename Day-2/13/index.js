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