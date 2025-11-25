// 5.  Find Intersection of Two Arrays
// input: [1,2,3], [2,3,4])
// output: [2,3]

function intersectionArray(arr1: number[], arr2: number[]) {
    let result: number[] = [];
    for(let i=0; i< arr2.length; i++) {
        if(arr1.includes(arr2[i])) {
            result.push(arr2[i]);
        }
    }
    return result
}

console.log(intersectionArray([1,2,3], [2,3,4]));

// test Cases

const testIntersectionArray = [
    {input1: [1,2,3], input2: [2,3,4], expected: [2,3]},
    {input1: [3,4,6], input2: [5,6,1], expected: [6]},
    {input1: [4,8,9], input2: [4,2,6], expected: [4]}
]

testIntersectionArray.forEach((test,index) => {
    const actual = intersectionArray(test.input1, test.input2);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})