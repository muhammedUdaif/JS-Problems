// 3. Write a program that takes a list of integers as input and returns a new list with only the even numbers.

// Test cases:
// Input: [1, 2, 3, 4, 5, 6]
// Expected output: [2, 4, 6]

// Input: [7, 8, 9, 10, 11, 12]
// Expected output: [8, 10, 12]

// Input: [2, 4, 6, 8, 10]
// Expected output: [2, 4, 6, 8, 10]

function arrEven(arr) {
    let result = [];
    for(let i=0; i< arr.length; i++){
       if(arr[i] % 2 === 0){
         result.push(arr[i]);
       }
    }
    return result
}

console.log(arrEven([2, 4, 6, 8, 10]));