// 3. Convert file size in bytes to human readable text.

// Input: 1500
// Output: "1.46 KB"

function formatFileSize(bytes: number): string {
    const units = ["B", "KB", "MB", "GB", "TB"];
    let size = bytes;
    let unitIndex = 0;

    while (size >= 1024 && unitIndex < units.length -1) {
        size /= 1024;
        unitIndex++;
    }
    return `${size.toFixed(2)} ${units[unitIndex]}`;
}

console.log(formatFileSize(7777));

const testFormatFileSize = [
    {input: 1500, expected: "1.46 KB"},
    {input: 3000, expected: "2.93 KB"},
    {input: 1024, expected: "1.00 KB"},
    {input: 7777, expected: "7.59 KB"}
]

testFormatFileSize.forEach((test, index) => {
    const actual = formatFileSize(test.input);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})


