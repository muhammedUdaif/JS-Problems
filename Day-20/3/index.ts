// 3.  Check if a Number is Armstrong Number (An Armstrong number is a number that is equal
//  to the sum of its own digits, each raised to the power of the total number of digits)
//      Armstrong Number: 153 = 1³ + 5³ + 3³

function isArmstrong(n: number) {
    let newNum = String(n).split("")
    let newNumCount = newNum.length;
    let sum = 0;


    for(let i=0; i< newNum.length; i++) {
        sum += Math.pow(Number(newNum[i]), newNumCount);
    }
    if (sum === n) {
        return true;
    } else {
        return false
    }
}

console.log(isArmstrong(153));

// test Cases

const testisArmstrong = [
    {input: 153, expected: true},
    {input: 234, expected: false},
    {input: 324, expected: false},
    {input: 370, expected: true}
]

testisArmstrong.forEach((test,index) => {
    const actual = isArmstrong(test.input);
    const result = actual === test.expected ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})