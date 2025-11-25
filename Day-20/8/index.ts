// 8. Convert an Object to Query String
// input: {name:"John", age:30}
// output: "name=John&age=30"


function queryConvertion(obj: Record<string, any>): string {
    return Object.entries(obj)
        .map(([key, value]) => `${key}=${value}`)
        .join("&");
}


console.log(queryConvertion({ name: "John", age: 30 }));

// test Cases

const testQueryConvertion = [
    {input: {name:"John", age:30}, expected: "name=John&age=30"},
    {input: {name: "arun", age: 24}, expected: "name=arun&age=24"},
    {input: {name: "yedhu", age: 28}, expected: "name=yedhu&age=28"}
]

testQueryConvertion.forEach((test, index) => {
    const actual = queryConvertion(test.input);
    const result = actual === test.expected ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})