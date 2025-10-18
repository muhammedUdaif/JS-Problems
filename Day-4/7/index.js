// 7. Write a Function that Converts RGB to Hex Color Code.

// Test cases:
// Input: [255, 165, 0]
// Output: "#FFA500"

function colorConvertion(arr) {
    let result = ""
    for(let i = 0; i< arr.length; i++) {
       let divident =  arr[0];
       console.log(divident)
       let divisor = 16;
       let quotient = Math.floor(divident/divisor);
       console.log(quotient);
       let reminder = arr[i] % 16;
       console.log(reminder)
       
    }
}
colorConvertion([255, 165, 0]);
