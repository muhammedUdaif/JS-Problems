// 4. Create a function combineObject, which takes 2 objects as arguments. It should return a new object that merges the properties of both objects. If there's a property key-clash, the property from obj2 takes priority.

// Test cases:
// Input: { a: 1, b: 2 }, { b: 3, c: 4 }
// Output: { a: 1, b: 3, c: 4 }

function combineObj(obj1, obj2) {
    if(typeof(obj1) !== "object" || typeof(obj2) !== "object") {
        return false;
    }
    let resultObj = Object.assign({},obj1, obj2);
    return resultObj;
}
console.log(combineObj({ a: 1, b: 2, c: 3}, { b: 3, c: 4 }));

const testCombineObj = [
    {input1: { a: 1, b: 2 }, input2: { b: 3, c: 4 }, expected: { a: 1, b: 3, c: 4 }},
    {input1: { a: 2, b: 1 }, input2: { b: 3, c: 4 }, expected: { a: 2, b: 3, c: 4 }},
    {input1: { a: 1, b: 2 }, input2: { b: 4, c: 3 }, expected: { a: 1, b: 4, c: 3 }},
    {input1: { a: 5, b: 6 }, input2: { b: 1, c: 2 }, expected: { a: 5, b: 1, c: 2 }},
    {input1: { a: 3, b: 4 }, input2: { b: 1, c: 2 }, expected: { a: 3, b: 1, c: 2 }},
    {input1: { a: 4, b: 3 }, input2: { b: 1, c: 2 }, expected: { a: 4, b: 1, c: 2 }},
    {input1: { a: 4, b: 3 }, input2: { b: 2, c: 1 }, expected: { a: 4, b: 2, c: 1 }},
    {input1: { a: 1, b: 2, c: 3}, input2: { b: 3, c: 9 }, expected: { a: 1, b: 3, c: 9 }},
    {input1: { a: 6, b: 3 }, input2: { b: 1, c: 2 }, expected: { a: 6, b: 1, c: 2 }},
    {input1: { a: 7, b: 1 }, input2: { b: 9, c: 2 }, expected: { a: 7, b: 9, c: 2 }},
    {input1: { a: 2, b: 1 }, input2: { b: 13, c: 14 }, expected: { a: 2, b: 13, c: 14 }},
    {input1: { a: 0, b: 3 }, input2: { b: 5, c: 7 }, expected: { a: 0, b: 5, c: 7 }},
    {input1: { a: 9, b: 5 }, input2: "hello", expected: false},
    {input1: "hello", input2: "world", expected: false},
    {input1: "hello", input2: { b: 3, c: 4 }, expected: false},
]

testCombineObj.forEach((test, index) => {
    const actual = combineObj(test.input1, test.input2);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})