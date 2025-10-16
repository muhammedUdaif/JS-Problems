// 7. Write a program that takes a sentence as input and returns the longest word in the sentence.

// Test cases:
// Input: "Hello world of programming"
// Expected output: "programming"

// Input: "The quick brown fox jumps over the lazy dog"
// Expected output: "programming"

// Input: "I love coding"
// Expected output: "coding"

function logestword(str) {
   let words =  str.split(" ");
   let longest = "";

   for(let word of words) {
      if(word.length > longest.length) {
        longest = word
      }
   }
   return longest
}
console.log(logestword("I love coding"));