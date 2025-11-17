// Write a function checkSameWeek(date1, date2) that:
// Checks whether the two given dates fall in the same calendar week.
// Example:
// Input:
// date1 = "2025-01-02"
// date2 = "2025-01-05"
// Output: false

function checkSameWeek(date1: string, date2: string): boolean {
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    const day1 = d1.getDay();
    const day2 = d2.getDay();
    
    const weekStart1 = new Date(d1);
    console.log(weekStart1.setDate(d1.getDate() - day1));

    const weekStart2 = new Date(d2);
    console.log(weekStart2.setDate(d2.getDate() - day2));

    return weekStart1 === weekStart2;
}

console.log(checkSameWeek("2025-01-02", "2025-01-05")); 

const testCheckSameWeek = [
    {input1: "2025-01-02", input2: "2025-01-05", expected: false}
]

testCheckSameWeek.forEach((test, index) => {
    const actual = checkSameWeek(test.input1, test.input2);
    const result = actual === test.expected ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})