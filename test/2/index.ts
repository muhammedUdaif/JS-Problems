// 2. Write a function that filters out expired items. It takes an array of objects, each with data and an expires-at value in milliseconds.

// Sample input: [{value: "data", expiresAt: 1764385871929}]

function filterExpiredItems(items: { value: string, expiresAt: number }[]) {
    const currentTime = Date.now();
    return items.filter(item => item.expiresAt > currentTime);

}

console.log(filterExpiredItems([{value: "data2", expiresAt: 93746252937426}, {value: "data2", expiresAt: 72864572915303}]));    

const testFilterExpiredItems = [
    {input: [{value: "data", expiresAt: 1764385871929}, { value: "data", expiresAt: 1764385871929846}], expected: [ { value: 'data', expiresAt: 1764385871929846 } ]},
    {input: [{value: "data1", expiresAt: 46190367256}, {value: "data1", expiresAt: 65611756363016}], expected: [{value: 'data1', expiresAt: 65611756363016 }]},
    {input: [{value: "data2", expiresAt: 93746252937426}, {value: "data2", expiresAt: 72864572915303}], expected:[{ value: 'data2', expiresAt: 93746252937426 },{ value: 'data2', expiresAt: 72864572915303 }]}
]

testFilterExpiredItems.forEach((test, index) => {
    const actual = filterExpiredItems(test.input);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})




