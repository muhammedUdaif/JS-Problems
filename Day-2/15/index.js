// 15. Write a program that takes a string as input and returns the reverse of each word in the string while preserving the word order.

// Test cases:
// Input: "Hello world"
// Expected output: "olleH dlrow"

// Input: "Programmers are awesome"
// Expected output: "sremmargorP era emosewa"

// Input: "Programming is fun"
// Expected output: "gnimmargorP si nuf"

function reverseOrder(str) {
    if(typeof(str) !== "string") {
        return "The type of the input value must be string not accepted by any other types!"
    }
    return str
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");
}

console.log(reverseOrder("Programming is fun"));

const testReverseOrder = [
    {input: "Hello world", expected: "olleH dlrow"},
    {input: "Programmers are awesome", expected: "sremmargorP era emosewa"},
    {input: "Programming is fun", expected: "gnimmargorP si nuf"},
    {input: "Udaif", expected: "fiadU"},
    {input: "Debugging", expected: "gniggubeD"},
    {input: "Learning", expected: "gninraeL"},
    {input: "Javascript is tricky", expected: "tpircsavaJ si ykcirt"},
    {input: "Will Power", expected: "lliW rewoP"},
    {input: "Exploring the learning world", expected: "gnirolpxE eht gninrael dlrow"},
    {input: "Collage sucks", expected: "egalloC skcus"},
    {input: "Try hard", expected: "yrT drah"},
    {input: "malayalam is malayalam", expected: "malayalam si malayalam"},
    {input: "coding is my passion", expected: "gnidoc si ym noissap"},
    {input: 123, expected: 321},
    {input: [], expected: []},
]

testReverseOrder.forEach((test, index) => {
    const actual = reverseOrder(test.input);
    const result = actual === test.expected ? "Passed" : "Failed";

    console.log(`Test Case ${index + 1}: ${result}`);
})
