// The series, 1^1 + 2^2 + 3^3 + …. + 10^10 = 10405071317
// Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ….+ 1000^1000.

function powerSum(num: number): number {
    let sum = 0;
   for(let i=1; i<= num; i++) {
       sum += Math.pow(i, i);
      if(sum > 1999999999) {
        break;
     }
   }
   return sum;
}

console.log(powerSum(1000));

// test Case

const testPowerSum = [
    {input: 10, expected: 10405071317},
    {input: 5, expected: 3413},
    {input: 4, expected: 288},
    {input: 11, expected: 295716741928},
    {input: 3, expected: 32},
]

for(let test of testPowerSum) {
    const actual = powerSum(test.input);
    const result = actual === test.expected ? "Pass" : "Fail";

    console.log(`Test Case: ${result}`);
}

