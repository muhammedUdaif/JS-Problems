// Write an async function getValueUntilGreaterThanTen(fetchFn) that:
// Repeatedly calls the provided async function fetchFn() until it returns a value greater
// than 10, and then returns that value.
// Example:
// Input:
// fetchFn → an async function that returns random numbers between 1 and 20
// Output: value: 14

async function getValueUntilGreaterThanTen(fetchFn: () => Promise<number>): Promise<number> {
    let value = await fetchFn();

    while (value <= 10) {
        value = await fetchFn();
    }

    return value;
}

async function mockFetchFn(): Promise<number> {
    return Math.floor(Math.random() * 20) + 1; 
}

(async () => {
    const result = await getValueUntilGreaterThanTen(mockFetchFn);
    console.log("Result:", result);
})();