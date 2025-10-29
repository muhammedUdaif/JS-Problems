// 9. Write a function to remove duplicate characters from the given string.

// Test cases:
// Input: 'apple'
// Expected output: 'aple'

function removeDuplicate(str) {
   if(typeof(str) !== "string") {
    return false;
   }
    let result = "";
    for(let i = 0; i< str.length; i++) {
      if(!result.includes(str[i])) {
        result += str[i];
      }
    }
    return result
}
console.log(removeDuplicate("apple"));

const testRemoveDuplicate = [
  {input: 'apple', expected: 'aple'},
  {input: 'muhammed', expected: 'muhaed'},
  {input: 'malayalam', expected: 'maly'},
  {input: 'yedhukrishnnan', expected: 'yedhukrisna'},
  {input: 'vonnue', expected: 'vonue'},
  {input: 'wayanad', expected: 'waynd'},
  {input: 'kozhikode', expected: 'kozhide'},
  {input: 'willpower', expected: 'wilpoer'},
  {input: 'ennovation', expected: 'enovati'},
  {input: 'programming', expected: 'progamin'},
  {input: 'javascript', expected: 'javscript'},
  {input: 'java', expected: 'jav'},
  {input: "learning", expected: 'learnig'},
  {input: 1234, expected: false},
  {input: true, expected: false},
]

testRemoveDuplicate.forEach((test, index) => {
  const actual = removeDuplicate(test.input);
  const result = actual === test.expected ? "Passed" : "Failed";

  console.log(`Test Case ${index + 1} :  ${result}`);
})