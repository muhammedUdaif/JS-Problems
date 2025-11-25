// 6.  Remove All Falsy Values from an Array (Falsy values: false, 0, "", null, undefined, NaN )
// input: [1,0,2,"",3,null,4]
// output: [1,2,3,4]

function removeFalsyValue(arr: (number| string| boolean| null | undefined) []) {
    let falsyValues = [false, 0, "", null, undefined, NaN];
    let result = [];
    for(let i=0; i< arr.length; i++) {
        if(!falsyValues.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(removeFalsyValue([1,0,2,"",3,null,4]));

// test Cases

const testremoveFalsyValue = [
    {input: [1,0,2,"",3,null,4], expected: [1,2,3,4]},
    {input: [3,1,"", null, 4,0], expected: [3,1,4]},
    {input: [5,6,1,0,null,undefined], expected: [5,6,1]},
    {input: [4,7,10,0,NaN], expected: [4,7,10]}
]

testremoveFalsyValue.forEach((test, index) => {
    const actual = removeFalsyValue(test.input);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`)
})

