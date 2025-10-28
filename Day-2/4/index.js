// 4. Write a program that determines if a string is an anagram of another string. An anagram is a word or phrase formed by rearranging the letters of another word or phrase.

// Test cases:
// Input: "listen", "silent"
// Expected output: True

// Input: "restful", "fluster"
// Expected output: True

// Input: "hello", "world"
// Expected output: False

function anagram(arr) {
    let n1 = arr[0].length;
    let n2 = arr[1].length;
    if(n1 != n2) {
        return false;
    }
   let sortedStr1 = arr[0].split('').sort().join('');
   let sortedStr2 = arr[1].split('').sort().join('');

   return sortedStr1 === sortedStr2;
}
console.log(anagram(["restful", "fluster"]));

// test case 

const testAnagram = [
    {input: ["listen", "silent"], expected: true},
    {input: ["restful", "fluster"], expected: true},
    {input: ["hello", "world"], expected: false},
    {input: ["vonnue", "wayanad"], expected: false},
    {input: ["passed", "failed"], expected: false},
    {input: ["going", "away"], expected: false},
    {input: ["tested", "testing"], expected: false},
    {input: ["tea", "teaching"], expected: false},
    {input: ["travelling", "hills"], expected: false},
    {input: ["mother", "father"], expected: false},
    {input: ["sister", "brother"], expected: false},
    {input: ["assist", "passing"], expected: false},
    {input: ["shoot", "keeping"], expected: false},
    {input: ["programing", "debugging"], expected: false},
    {input: [123456, "english"], expected: false},
]

testAnagram.forEach((test, index) => {
    const actual = anagram(test.input);
    const result = actual === test.expected ? "Passed" : "Failed";

    console.log(`Test Case ${index + 1} : ${result}`);
})