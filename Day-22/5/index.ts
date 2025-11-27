// 5. Evaluate a polynomial using Horner's method?

function hornerEvaluatePolynomial(coefficients: number[], x: number): number {
    let result = 0;

    for(let i=0; i < coefficients.length; i++) {
        result = result * x + coefficients[i];
    }

    return result;
}

console.log(hornerEvaluatePolynomial([2, -6, 2, -1], 3));