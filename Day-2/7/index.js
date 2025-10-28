// 7. Write a program that takes a sentence as input and returns the longest word in the sentence.

// Test cases:
// Input: "Hello world of programming"
// Expected output: "programming"

// Input: "The quick brown fox jumps over the lazy dog"
// Expected output: "programming"

// Input: "I love coding"
// Expected output: "coding"

function logestword(str) {
   if(typeof(str) !== "string") {
      return 'The input type should be sting only not other types';
   }
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

const testLogestWord = [
   {input: "Hello world of programming", expected: "programming" },
   {input: "I love coding", expected: "coding"},
   {input: "consectetur adipisicing", expected: "consectetur"},
   {input: "Perspiciatis rem ipsa", expected: "Perspiciatis"},
   {input: "quaerat nobis ex", expected: "quaerat"},
   {input: "praesentium asperiores", expected: "praesentium"},
   {input: "sapiente iure", expected: "sapiente "},
   {input: "Suscipit vero maxime", expected: "Suscipit"},
   {input: "placeat delectuse", expected: "delectuse"},
   {input: "Eaque harum laborum", expected: "laborum"},
   {input: "sapiente cupiditate", expected: "cupiditate"},
   {input: "Working at vonnue", expected: "Working"},
   {input: "I love Programming", expected: "coding"},
   {input: 123456, expected: "coding"},
   {input: true, expected: "coding"},
]

testLogestWord.forEach((test, index) => {
   const actual = logestword(test.input);
   const result = actual === test.expected ? "Passed" : "Failed";

   console.log(`Test Case ${index + 1}: ${result}`);
})