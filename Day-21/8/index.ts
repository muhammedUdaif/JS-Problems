// 8. Write a function which replaces all numbers in a string with "#".

// Test cases:

// Input: "Room 45 on floor 3"
// Output: "Room ## on floor #"

function replaceNumbersWithHash(input: string) {
    let result = "";

    for (let i=0; i< input.length; i++) {
        if (input[i] >= "0" && input[i] <= "9") {
            result += "#";
        }
        else {
            result += input[i];
        }
    }

    return result;
}

console.log(replaceNumbersWithHash("Room 45 on floor 3"));

// test Cases

const testReplaceNumbersWithHash = [
    {input: "Room 45 on floor 3", expected: "Room ## on floor #"},
    {input: "Cristano has 7 ballendiors", expected: "Cristano has # ballendiors"},
    {input: "India 1 st pime minister is javaharlal nehru", expected: "India # st pime minister is javaharlal nehru"},
    {input: "India is the 1 st Position at the largest population of the world.", expected: "India is the # st Position at the largest population of the world."}
]

testReplaceNumbersWithHash.forEach((test, index) => {
    const actual = replaceNumbersWithHash(test.input);
    const result = actual === test.expected ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})
