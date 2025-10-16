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
