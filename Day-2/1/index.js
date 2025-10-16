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
