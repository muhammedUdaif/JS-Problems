
// 1. Write a function named calculateTotal that takes two arguments:
//    - billAmount (a number)
//    - taxPercentage (a number, e.g., 15 for 15%)
   
// The function should calculate the tax amount and return the total bill (bill amount + tax amount). Use default 20% if tax is not provided.
function calculateTotal(num,  taxPercentage = 20) {
   if(typeof(num) !== "number" || typeof(taxPercentage) !== "number") {
      return false;
   }
   let percentage =  taxPercentage/100;
   let taxAmount = num * percentage;
   let total = num +  taxAmount;
   
   return total
}

console.log(calculateTotal(0));

const testCalculateTotal = [
   {input1:3, input2: 15, expected: 3.45 },
   {input1:4, input2: 20, expected: 4.8 },
   {input1:5, input2: 24, expected: 6.2 },
   {input1:7, input2: 12, expected: 7.84 },
   {input1:2, input2: 10, expected: 2.2 },
   {input1:9, input2: 38, expected: 12.42 },
   {input1:10, input2: 27, expected: 12.7 },
   {input1:7, input2: 18, expected: 8.26 },
   {input1:1, input2: 14, expected: 1.1400000000000001 },
   {input1:false, input2: 19, expected: false },
   {input1:1, input2: true, expected: false},
   {input1:"hello", input2: 60, expected: false},
   {input1:5, expected: 6 },
   {input1:0,  expected: 0 },
   {input1:7, input2: "hello", expected: false },
]

testCalculateTotal.forEach((test, index) => {
   const actual = calculateTotal(test.input1, test.input2);
   const result = actual === test.expected ? "Pass" : "Fail";

   console.log(`Test Case ${index + 1}: ${result}`);
})