// 7. Write a function which converts URL query params to objects.

// Test cases:

// Input: "?name=John&age=20&active=true"
// Output: {name: "John", age: "20", active: "true"}

function queryParamsToObject(query: string) {
    let result: {[key: string]: string} = {};
    if (query.startsWith("?")) {
        query = query.slice(1);
    }

    let params = query.split("&");

    for(let i=0; i < params.length; i++) {
        let [key, value] = params[i].split("=");
        result[key] = value;
    }
    
    return result;
}

console.log(queryParamsToObject("?name=John&age=20&active=true"));

// test Cases

const testQueryParamsToObject = [
    {input: "?name=John&age=20&active=true", expected: {name: "John", age: "20", active: "true"}},
    {input: "?name=muhammed&age=23&active=false", expected: {name: "muhammed", age: "23", active: "false"}},
    {input: "?name=arun&age=30&proffesion=Developer", expected: {name: "arun", age: "30", proffesion: "Developer"}},
    {input: "?name=ronaldo&age=42&Proffesion=Footballer", expected: {name: "ronaldo", age: "42", Proffesion: "Footballer"}}
]

testQueryParamsToObject.forEach((test, index) => {
    const actual = queryParamsToObject(test.input);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";
    console.log(`Test Case ${index + 1}: ${result}`);
})