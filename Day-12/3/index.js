// 3. Write a function which takes a string, reverse all the vowels in the string and return it.

// Test cases:
// Input: s = "IceCreAm"
// Output: "AceCreIm"

function reverseVowels(str) {
    let vowels = "aeiouAEIOU";
    let vowelsArray = [];
   for(let i= str.length -1; i>=0; i--) {
       if(vowels.includes(str[i])) {
          vowelsArray.push(str[i]);
       }
   }
   let result = "";
   let vowelIndex = 0;
   for(let i=0; i< str.length; i++) {
       if(vowels.includes(str[i])) {
        result += vowelsArray[vowelIndex++]
       } else {
        result += str[i];
       }
   }
   return result;
}

console.log(reverseVowels("IceCreAa"));

// test Case 

const testReverseVowels = [
    {input: "IceCreAm", expected: "AceCreIm"},
    {input: "IAeCreAm", expected: "AeeCrAIm"},
    {input: "IceCreAa", expected: "acACreeI"},
]

testReverseVowels.forEach((test, index) => {
    const actual = reverseVowels(test.input);
    const result = actual === test.expected ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}:  ${result}`);
})