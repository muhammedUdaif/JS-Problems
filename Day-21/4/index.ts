// 4. Convert seconds into time text.

// Test cases:

// Input: 9000
// Output: "2 hours 30 minutes"

function convertSecondsToTimeText(seconds: number) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    let timeText = "";
    if (hours > 0) {
        timeText += `${hours} hours`;
    }
    if (minutes > 0) {
        if (timeText) timeText += " ";
        timeText += `${minutes} minutes`;
    }
    if (secs > 0 ) {
        if (timeText) timeText += " ";
        timeText += `${secs} seconds`;
    }

    return timeText;
}

console.log(convertSecondsToTimeText(12000));

// test Cases

const testConvertSecondsToTimeText = [
    {input: 9000, expected: "2 hours 30 minutes"},
    {input: 5000, expected: "1 hours 23 minutes 20 seconds"},
    {input: 12000, expected: "3 hours 20 minutes"},
    {input: 13245, expected: "3 hours 40 minutes 45 seconds"},
    {input: 9701, expected: "2 hours 41 minutes 41 seconds"}
]

testConvertSecondsToTimeText.forEach((test, index) => {
    const actual = convertSecondsToTimeText(test.input);
    const result = actual === test.expected ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})