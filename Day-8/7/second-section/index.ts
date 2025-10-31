// 1. Write a program that checks if a given number is prime. with the integration of the typescript.

// Test cases:
// Input: 7
// Expected output: True

// Input: 10
// Expected output: False

// Input: 29
// Expected output: True

// function isPrimeType(num: number): boolean {
//    if(num === 1) {
//     return false;
//    }
//    for(let i=2; i< num; i++) {
//      if(num % i === 0){
//         return false;
//      }
//    }
//    return true;
// }




// 2. Write a program that takes a sentence as input and returns the word count.

// Test cases:
// Input: "Hello world"
// Expected output: 2

// Input: "This is a sample sentence."
// Expected output: 5

// Input: "Programming is fun!"
// Expected output: 3

// function wordCounts(word : string): number {
//    let count  = 1;
//    for(let i=0; i< word.length; i++) {
//       if(word[i] === " ") {
//          count++
//       }
//    }
//    return count;
// }
// wordCounts("Hello world");

// 4. Write a program that determines if a string is an anagram of another string. An anagram is a word or phrase formed by rearranging the letters of another word or phrase.

// Test cases:
// Input: "listen", "silent"
// Expected output: True

// Input: "restful", "fluster"
// Expected output: True

// Input: "hello", "world"
// Expected output: False

// function typeanagram(str1: string, str2: string): boolean {
//    let n1 = str1.length;
//    let n2 = str2.length;
//    if(n1 !== n2 ) {
//       return false;
//    }
//    let sortedStr1 = str1.split("").sort().join("");
//    let sortedStr2 = str2.split("").sort().join("");
//    return sortedStr1 === sortedStr2
// }

// console.log(typeanagram("listen", "silent"));