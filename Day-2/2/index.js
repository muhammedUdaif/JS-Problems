// 2. Write a program that takes a sentence as input and returns the word count.

// Test cases:
// Input: "Hello world"
// Expected output: 2

// Input: "This is a sample sentence."
// Expected output: 5

// Input: "Programming is fun!"
// Expected output: 3

let str = "Hello world"


function wordCount(str) {
    let count = 1;
    for(let i=0; i<str.length; i++) {
        if(str[i] === " "){
            count ++;
        }
    }
    return count;
}
console.log(wordCount("Programming is fun!"));


// test case

const testWordCount = [
    {input:"Hello world", expected: 2},
    {input:"This is a sample sentence.", expected: 5},
    {input:"Programming is fun!", expected: 3},
    {input:"Hello yedhu krishnan", expected: 3},
    {input:"How the trainnig is going", expected: 5},
    {input:"Is that everything fine", expected: 4},
    {input:"Yeah!", expected: 1},
    {input:"It's Perfectely okey for me", expected: 5},
    {input:"I find that", expected: 3},
    {input:"Some of the area is need to improve", expected: 8},
    {input:"Okey fine keep going", expected: 4},
    {input:"Don't be quit", expected: 3},
    {input:"You are almost there", expected: 4},
    {input:"Thank you!", expected: 2},
    {input:"For the motivation it's means a lot's for me", expected: 9},
]

testWordCount.forEach((test, index) => {
    const actual = wordCount(test.input);
    const result = actual === test.expected ? "Passed" : "Failed";

    console.log(`Test Case ${index + 1}: ${result}`);
})
