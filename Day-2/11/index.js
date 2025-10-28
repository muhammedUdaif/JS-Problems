// 11. Write a program that determines if a given number is a perfect square. A perfect square is an integer that is equal to the square of another integer.

// Test cases:
// Input: 16
// Expected output: True

// Input: 10
// Expected output: False

// Input: 25
// Expected output: True

function perfectSqure(num) {
   for(let i=0; i <= num; i++) {
       if(i * i === num) {
        return true
       }
    }
    return false
}

console.log(perfectSqure(25));

const testPerfectSqure = [
    {input: 16, expected: true},
    {input: 10, expected: false},
    {input: 25, expected: true},
    {input: 1, expected: true},
    {input: 2, expected: false},
    {input: 13, expected: false},
    {input: 3, expected: false},
    {input: 4, expected: true},
    {input: 55, expected: false},
    {input: 81, expected: true},
    {input: 7, expected: false},
    {input: 11, expected: false},
    {input: "16", expected: false},
    {input: "muhammed udaif", expected: false},
    {input: true, expected: false},
]

testPerfectSqure.forEach((test, index) => {
    const actual = perfectSqure(test.input);
    const result = actual === test.expected ? "Passed" : "Failed";

    console.log(`Test Case ${index + 1}: ${result}`);
})