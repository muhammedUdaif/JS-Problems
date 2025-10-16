// 15. Write a program that takes a string as input and returns the reverse of each word in the string while preserving the word order.

// Test cases:
// Input: "Hello world"
// Expected output: "olleH dlrow"

// Input: "Programmers are awesome"
// Expected output: "sremmargorP era emosewa"

// Input: "Programming is fun"
// Expected output: "gnimmargorP si nuf"

function reverseOrder(str) {
    return str
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");
}

console.log(reverseOrder("Programming is fun"));
