// 10. Deep Object Comparison (without JSON.stringify)
//       Write a function deepEqual(a, b) that returns true if two values are deeply equal.
// input: deepEqual({a:1, b:{c:2}}, {a:1, b:{c:2}})
// output: true

// input:deepEqual([1, [2]], [1, [2, 3]]) 
// output: false

function deepEqual(obj1: any, obj2: any): boolean {
    if (obj1 === obj2) return true;

    if (obj1 === null || obj2 === null || typeof obj1 !== "object" || typeof obj2 !== "object")
        return false;


    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    return true;
}

console.log(deepEqual({a:1, b:{c:2}}, {a:1, b:{c:2}}));

// test Cases


const testDeepEqual = [
    {input1: {a:1, b:{c:2}}, input2: {a:1, b:{c:2}}, expected: true },
    {input1:[1, [2]], input2: [1, [2, 3]], expected: false}
]

testDeepEqual.forEach((test, index) => {
    const actual = deepEqual(test.input1, test.input2);
    const result = actual === test.expected ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})