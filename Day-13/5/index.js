// 5. Write a program which takes an 2D array as input like a matrix. 
// If an element is 0, set its entire row and column to 0's and return the updated array.

// Test cases:
// Input: [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

// Input: [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

function setZeroMatrix(matrix) {
    if(typeof(matrix) !== "object") {
        return false;
    }
    let rows = matrix.length;
    let cols = matrix[0].length;

    let zeroRows = [];
    let zeroCols = [];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                zeroRows.push(i);
                zeroCols.push(j);
            }
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let makeZero = false;

            for (let k = 0; k < zeroRows.length; k++) {
                if (i === zeroRows[k]) {
                    makeZero = true;
                    break;
                }
            }

            for (let m = 0; m < zeroCols.length; m++) {
                if (j === zeroCols[m]) {
                    makeZero = true;
                    break;
                }
            }

            if (makeZero) {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
}

console.log(setZeroMatrix([[1,1,1],[1,0,1],[1,1,1]]));

const testSetZeroMatrix = [
    {input:[[1,1,1],[1,0,1],[1,1,1]], expected: [[1,0,1],[0,0,0],[1,0,1]]},
    {input:[[0,1,2,0],[3,4,5,2],[1,3,1,5]], expected: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]},
    {input:false, expected: false},
    {input: "haiuhi", expected: false},
    {input: 36718, expected: false},
    {input: undefined, expected: false},
    {input: Symbol, expected: false},
    {input: 0n, expected: false},
]

testSetZeroMatrix.forEach((test, index) => {
    const actual =setZeroMatrix(test.input);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})