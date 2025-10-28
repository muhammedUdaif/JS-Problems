// 14. Write a program that checks if a given string is a palindrome, ignoring spaces and punctuation.

// Test cases:
// Input: "A man, a plan, a canal, Panama!"
// Expected output: True

// Input: "Racecar"
// Expected output: True

// Input: "Hello, world!"
// Expected output: False

function palindrome(str) {
    str = str.toLowerCase();  
   let output = "";
   for(let i =str.length -1 ; i >= 0 ; i--) {
       output += str[i];
   }
  return str === output
}

console.log(palindrome("Racecar"));
