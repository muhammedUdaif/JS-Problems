// 7. Write a Function that Converts RGB to Hex Color Code.

// Test cases:
// Input: [255, 165, 0]
// Output: "#FFA500"

function colorConvertor(arr) {
    if(typeof(arr) !== "object") {
        return false;
    }
    let [r,g,b] = arr;
    function hex(num) {
        let hexDigit = "0123456789ABCDEF";

        let firstItem = Math.floor(num / 16);
        let secondItem = num % 16;

        return hexDigit[firstItem] + hexDigit[secondItem];
    }
    return "#" + hex(r) + hex(g) + hex(b);
}

console.log(colorConvertor([255, 165, 0]));

const testColorConvertor = [
    {input: [255, 165, 0], expected: "#FFA500"},
    {input: [255, 0, 0], expected: "#FF0000"},
    {input: [255, 255, 0], expected: "#FFFF00"},
    {input: [0, 128, 0], expected: "#008000"},
    {input: [0, 255, 255], expected: "#00FFFF"},
    {input: [0, 0, 255], expected: "#0000FF"},
    {input: [255, 0, 255], expected: "#FF00FF"},
    {input: [255, 255, 255], expected: "#FFFFFF"},
    {input: [0, 0, 0], expected: "#000000"},
    {input: [128, 128, 128], expected: "#808080"},
    {input: [165, 42, 42], expected: "#A52A2A"},
    {input: [255, 192, 203], expected: "#FFC0CB"},
    {input: [255, 215, 0], expected: "#FFD700"},
    {input: [128, 0, 128], expected: "#800080"},
    {input: "muhammed", expected: false},
]

testColorConvertor.forEach((test, index) => {
    const actual = colorConvertor(test.input);
    const result = actual === test.expected ? "Passed" : "Failed";

    console.log(`Test Case ${index + 1}: ${result}`)
})