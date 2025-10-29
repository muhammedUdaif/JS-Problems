// 2. Write a program to find whether a given number is an Armstrong number ( An Armstrong number is the sum of its own digits, each raised to the power of the number of digits).

// Test cases:
// Input: 153
// Expected output: true // 153 = 1^3 + 5^3 + 3^3 =  1 + 125 + 27  = 153

function armstrong(num) {
  if(typeof(num) !== "number") {
    return false;
  }
  let originalNum = num;
  let lengthEl = num.toString().length;
  let sum = 0;
  while(num >= 1) {
    let element = num % 10 
    num = Math.floor(num/10); 
    sum += element ** lengthEl;
  }
  if(sum === originalNum) {
    return true;
  }else {
    return false;
  }
}

armstrong(153);

const testArmstrong = [
  {input: 153, expected: true},
  {input: 370, expected: true},
  {input: 371, expected: true},
  {input: 407, expected: true},
  {input: 1634, expected: true},
  {input: 8208, expected: true},
  {input: 9474, expected: true},
  {input: 32, expected: false},
  {input: 5794, expected: false},
  {input: 365, expected: false},
  {input: 857, expected: false},
  {input: 466, expected: false},
  {input: 123, expected: false},
  {input: "udaif", expected: false},
  {input: [], expected: false},
]

testArmstrong.forEach((test, index) => {
   const actual = armstrong(test.input);
   const result = actual === test.expected ? "Passed" : "Failed";

   console.log(`Test Case ${index + 1} : ${result}`);
})