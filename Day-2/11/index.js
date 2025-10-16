// 11. Write a program that determines if a given number is a perfect square. A perfect square is an integer that is equal to the square of another integer.

// Test cases:
// Input: 16
// Expected output: True

// Input: 10
// Expected output: False

// Input: 25
// Expected output: True

function perfectSqure(num) {
   for(let i=0; i < num; i++) {
       if(i * i === num) {
        return true
       }
    }
    return false
}

console.log(perfectSqure(25));