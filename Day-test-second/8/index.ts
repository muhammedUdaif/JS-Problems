// Checks whether an integer is even without using the modulo (%) operator.

function isEven(n: number): boolean {
    
    if (n < 0) {
        return isEven(-n);
    }
    
    if (n === 0) return true;
    if (n === 1) return false;
    
    return isEven(n - 2);
}


const testIsEven = [
    {input: 4, expected: true},
    {input: 7, expected: false},
    {input: -2, expected: true},
    {input: -3, expected: false}
]

testIsEven.forEach((test, index) => {
    const actual = isEven(test.input);
    const result = actual === test.expected ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})