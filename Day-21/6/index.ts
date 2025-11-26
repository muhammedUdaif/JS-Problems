// 6. Write a function which finds the common keys between two objects.

// Test cases:

// Input: {name: "Brad", age: "25"}, {name: "Titan", place: "mars"}
// Output: ["name"]

function findCommonKeys(obj1: {[key: string]: any}, obj2: {[key: string]: any}) {
    let commonkeys = [];

    for (let key in obj1) {
        if (key in obj2) {
            commonkeys.push(key);
        }
    }

    return commonkeys
}

console.log(findCommonKeys({name: "Brad", age: "25"}, {name: "Titan", place: "mars"}))

// test Cases

const testFindCommonKeys = [
    {input1: {name: "Brad", age: "25"}, input2:{name: "Titan", place: "mars"}, expected: ["name"]},
    {input1: {name: "udaif", age: "23"}, input2:{name: "Football", place: "Europe"}, expected: ["name"]},
    {input1: {name: "yedhu", age: "23"}, input2: {name: "prabhath", age: "24"}, expected: ["name", "age"]},
    {input1: {profession: "Software Engineer", age: 25}, input2: {name: "Noufal", age: 25}, expected: ["age"]}
]

testFindCommonKeys.forEach((test, index) => {
    const actual = findCommonKeys(test.input1, test.input2);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})
