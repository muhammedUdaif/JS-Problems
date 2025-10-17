// 2. Write a program to find whether a given number is an Armstrong number ( An Armstrong number is the sum of its own digits, each raised to the power of the number of digits).

// Test cases:
// Input: 153
// Expected output: true // 153 = 1^3 + 5^3 + 3^3 =  1 + 125 + 27  = 153

function armstrong(num) {
  let originalNum = num;
  let lengthEl = num.toString().length;
//   console.log(lengthEl);
  let sum = 0;
  while(num >= 1) {
      let element = num % 10 
      num = Math.floor(num/10); 
    sum += element ** lengthEl;
    console.log(sum)
  }
  if(sum === originalNum) {
     console.log("Given number is Armstrong")
  }else {
    console.log("given number is not a Armstrong")
  }
}

console.log(armstrong(153));
