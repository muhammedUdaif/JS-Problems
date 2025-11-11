// Write a function SortBySum(arr) that sorts an array of arrays by the sum of their elements.
// Example:
// Input: [[1,2,3],[4],[2,7]]
// Output: [[2,7],[1,2,3],[4]]

function SortBySum(arr: number[][]): number[][] {
    return arr.sort((a, b) => {
        const subA = a.reduce((acc, item) => acc + item, 0);
        const subB = b.reduce((acc, item) => acc + item, 0);

        return subB - subA;
    })
}

console.log(SortBySum([[1,2,3],[4],[2,7]]));

// test Case

const testSortBySum = [
    {input: [[1,2,3],[4],[2,7]], expected: [[2,7],[1,2,3],[4]]},
    {input: [[6,7,2],[10],[7,9]], expected: [[7,9],[6,7,2],[10]]},
    {input: [[0,2,0],[8],[1,4]], expected: [[8],[1,4],[0, 2, 0]]},
    {input: [[3,3,3],[],[2,5]], expected: [[3,3, 3],[2,5],[]]},
    {input: [[],[],[]], expected: [[],[],[]]},
]

for(let test of testSortBySum) {
    const actual = SortBySum(test.input);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

    console.log(`Test Case : ${result}`);
}