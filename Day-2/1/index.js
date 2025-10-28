// 1. Write a program that checks if a given number is prime.

// Test cases:
// Input: 7
// Expected output: True

// Input: 10
// Expected output: False

// prime numbers are 2,3,5,7,11
function isPrime(num) {
    if(num === 1) {
        return false;
    }
    for(let i=2; i< num; i++){
        if(num % i === 0) {
            return false
        }
    }
    return true;
}
console.log(isPrime(9));

// test case

const testPrime = [
    {input:1, expected: false},
    {input:2, expected: true},
    {input:3, expected: true},
    {input:4, expected: false},
    {input:5, expected: true},
    {input:6, expected: false},
    {input:7, expected: true},
    {input:8, expected: false},
    {input:9, expected: false},
    {input:10, expected: false},
    {input:11, expected: true},
    {input:12, expected: false},
    {input:13, expected: true},
    {input:14, expected: false},
    {input:15, expected: false},
]

testPrime.forEach((test, index) => {
  const actual = isPrime(test.input);
  const result = actual === test.expected ? "Passed" : "Failed";

  console.log(`Test Case ${index + 1}: ${result}`);
  console.log(`  Input: ${JSON.stringify(test.input)}`);
});