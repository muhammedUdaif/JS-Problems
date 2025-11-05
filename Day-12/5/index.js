
// 5. Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Test cases:
// Input: s = "roses are red"
// Output: 1

// Input: s = "aabb"
// Output: -1

function nonRepeating(str) {
    if(typeof(str) !== "string") {
        return false;
    }
    for(let i =0 ; i < str.length; i++) {
       let count = 0;
     for(let j = 0; j < str.length; j++) {
        if(i !== j && str[i] === str[j]) {
        count ++;
        break;
     }
    }
    if(count === 0) {
        return i;
    }
   }
   return -1;
}

console.log(nonRepeating("aabb"));

const testNonRepeating = [
    {input: "roses are red", expected: 1 },
    {input: "aabb", expected: -1 },
    {input: "muhammed udaif", expected: 2 },
    {input: true, expected: false },
    {input: undefined, expected: false },
    {input: null, expected: false },
    {input: 34, expected: false },
    {input: [], expected: false },
]

testNonRepeating.forEach((test, index) => {
    const actual = nonRepeating(test.input);
    const result = actual === test.expected ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})
