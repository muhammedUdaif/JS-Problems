// Write a function getValueByPath(obj, path) that safely retrieves nested values using a
// string path.
// Input:
// obj = { a: { b: { c: 42 } } }, path = "a.b.c"
// Output: 42
// Input: path = "a.x.c" → Output: undefined

function getValueByPath(obj: any, path: string): any {
    const keys = path.split('.');  
    console.log(keys)
    let current = obj;

    for (const key of keys) {
        if ( typeof current !== 'object') {
            return undefined;
        }
        current = current[key];
    }

    return current;
}

console.log(getValueByPath({ a: { b: { c: 42 } } }, "a.b"));

const testObj = [
   {input: { a: { b: { c: 42 } } }, input2: "a.b.c", expected: 42},
   {input: { a: { b: { c: 42 } } }, input2: "a.b", expected: {c: 42}},
   {input: { a: { b: { c: 42 } } }, input2: "a", expected: {b: {c: 42}}},
   {input: { a: { b: { c: 42 } } }, input2: "a.x.c", expected: undefined},
   {input: { a: { b: { c: 42 } } }, input2: "x.y.z", expected: undefined},
]

testObj.forEach((test, index) => {
    const actual = getValueByPath(test.input, test.input2);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1} : ${result}`);
})