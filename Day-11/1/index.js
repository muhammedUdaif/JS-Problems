
// 1. Write a function named calculateTotal that takes two arguments:
//    - billAmount (a number)
//    - taxPercentage (a number, e.g., 15 for 15%)
   
// The function should calculate the tax amount and return the total bill (bill amount + tax amount). Use default 20% if tax is not provided.

function calculateTotal(num, taxPercentage = 20) {
   let percentage =  taxPercentage/100;
   let taxAmount = num * percentage;
   let total = num +  taxAmount;
   
   return total
}

console.log(calculateTotal(3));
