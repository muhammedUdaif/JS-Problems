// 5. Write a program that takes a string as input and returns the frequency of each character in the string.

// Test cases:
// Input: "hello"
// Expected output: {'h': 1, 'e': 1, 'l': 2, 'o': 1}

// Input: "programming"
// Expected output: {'p': 1, 'r': 2, 'o': 1, 'g': 2, 'a': 1, 'm': 2, 'i': 1, 'n': 1}

function frequencyLetter(str) {
    let result = {};
   for(let i=0; i< str.length; i++){
      let temp = str[i]
    result[temp] ? result[temp]++ : result[temp] = 1;
   }
   return result
}
console.log(frequencyLetter("programming"));
