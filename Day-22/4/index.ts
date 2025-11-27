// 4. Evaluate a polynomial.

function evaluatePolynomial(arr: number[], x: number): number {
    let result = 0;
    const degree = arr.length;

    for(let i=0; i < degree; i++) {
        result += arr[i] * Math.pow(x, degree - i - 1);
    }

    return result;
}

console.log("Evaluate Polynomial: ", evaluatePolynomial([2, -6, 2, -1], 3));

const testEvaluatePolynomial = [
    {input1: [2, -6, 2, -1], input2: 3, expected: 5},
    {input1: [1, 0, -4], input2: 2, expected: 0},
    {input1: [3, 4, 0, -2], input2: 1, expected: 5}
]

testEvaluatePolynomial.forEach((test, index) => {
    const actual = evaluatePolynomial(test.input1, test.input2);
    const result = actual === test.expected ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
});