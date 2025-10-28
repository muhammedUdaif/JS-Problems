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

const testFrequencyLetter = [
   {input: "hello", expected: {'h': 1, 'e': 1, 'l': 2, 'o': 1} },
   {input: "programming", expected: {'p': 1, 'r': 2, 'o': 1, 'g': 2, 'a': 1, 'm': 2, 'i': 1, 'n': 1} },
   {input: "udaif", expected: {'u': 1, 'd': 1, 'a': 1, 'i': 1, 'f': 1} },
   {input: "yedhu", expected: {'y': 1, 'e': 1, 'd': 1, 'h': 1, 'u': 1} },
   {input: "coding", expected: {'c': 1, 'o': 1, 'd': 1, 'i': 1, 'n': 1, 'g': 1} },
   {input: "vonnue", expected: {'v': 1, 'o': 1, 'n': 2, 'u': 1, 'e': 1} },
   {input: "mother", expected: {'m': 1, 'o': 1, 't': 1, 'h': 1, 'e': 1, 'r': 1} },
   {input: "word", expected: {'w': 1, 'o': 1, 'r': 1, 'd': 1} },
   {input: "java", expected: {'j': 1, 'a': 2, 'v': 1} },
   {input: "javascript", expected: {'j': 1, 'a': 2, 'v': 1, 's': 1,'c': 1, 'r': 1, 'i': 1, 'p': 1, 't': 1} },
   {input: "react", expected: {'r': 1, 'e': 1, 'a': 1, 'c': 1, 't': 1} },
   {input: "next", expected: {'n': 1, 'e': 1, 'x': 1, 't': 1} },
   {input: true, expected: {'h': 1, 'e': 1, 'l': 2, 'o': 1} },
   {input: 1234556, expected: {'h': 1, 'e': 1, 'l': 2, 'o': 1} },
   {input: "hello@", expected: {'h': 1, 'e': 1, 'l': 2, 'o': 1, '@': 1} },
]

testFrequencyLetter.forEach((test, index) => {
   const actual = frequencyLetter(test.input);
   const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Passed" : "Failed"

   console.log(`Test Case ${index + 1} : ${result}`);
})
