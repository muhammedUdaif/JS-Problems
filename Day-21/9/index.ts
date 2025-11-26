// 9. Transform Array of Objects by Merging Duplicate IDs.

// Test cases:

// Input: [
//   {id: 1, value: 10},
//   {id: 2, value: 20},
//   {id: 1, value: 15}
// ]
// Output: [
//   {id: 1, value: 25},
//   {id: 2, value: 20}
// ]

function mergeDuplicateIDs(arr: {id: number, value: number}[]) {
    let result: {id: number, value: number}[] = [];
    
    for (let i=0; i< arr.length; i++) {
        let found = false;
        for (let j=0; j< result.length; j++) {
            if (arr[i].id === result[j].id) {
                result[j].value += arr[i].value;
                found = true;
                break;
            }
        }
        if (!found) {
            result.push({id: arr[i].id, value: arr[i].value});
        }
    }

    return result;
}

console.log(mergeDuplicateIDs([{id: 1, value: 10}, {id: 2, value: 20}, {id: 1, value: 15}]));

// test Cases

const testMergeDuplicateIds = [
    {input: [{id: 1, value: 10}, {id: 2, value: 20}, {id: 1, value: 15}], expected: [{id: 1, value: 25}, {id: 2, value: 20}]},
    {input: [{id: 1, value: 20}, {id: 1, value: 10}, {id: 2, value: 20}], expected: [{id: 1, value: 30}, {id: 2, value: 20}]},
    {input: [{id:2, value: 40}, {id: 2, value: 80}, {id: 1, value: 11}], expected: [{id: 2, value: 120}, {id: 1, value: 11}]},
    {input: [{id:6, value: 10}, {id: 3, value: 12}, {id: 6, value: 32}], expected: [{id: 6, value: 42}, {id: 3, value: 12}]},
    {input: [{id:2, value: 30}, {id:4, value: 56}, {id:1, value: 43}], expected: [{id: 2, value: 30}, {id: 4, value: 56}, {id: 1, value: 43}]}
]

testMergeDuplicateIds.forEach((test, index) => {
    const actual = mergeDuplicateIDs(test.input);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})