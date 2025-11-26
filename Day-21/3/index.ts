// 3. Convert Array of Objects to a Single Object

// Test cases:

// Input: [{key: "a", value: 1}, {key: "b", value: 2}]
// Output: {a: 1, b: 2}

function arrayToObject(arr: {key: string, value: any}[]) {
    let result: {[key: string]: any} = {};

    for (let i=0; i< arr.length; i++) {
        result[arr[i].key] = arr[i].value;
    }
    
    return result;
}

console.log(arrayToObject([{key: "a", value: 1}, {key: "b", value: 2}]));

// test cases

const testArrayToObject = [
    {input: [{key: "a", value: 1}, {key: "b", value: 2}], expected: {a: 1, b: 2}},
    {input: [{key: "arun", value: "student"}, {key: "Gayathri", value: "teacher"}], expected: {arun: "student", Gayathri: "teacher"}},
    {input: [{key: "kozhikode", value: "cyberPark"}, {key: "Ernakulam", value: "TechnoPark"}], expected: {kozhikode: "cyberPark", Ernakulam: "TechnoPark"}}
]

testArrayToObject.forEach((test, index) => {
    const actual = arrayToObject(test.input);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})

