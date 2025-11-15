// Write a function frequencySort(arr) that sorts numbers by their frequency (most frequent
// first). If two numbers have the same frequency, smaller number comes first.
// Input: [4,5,6,5,4,3]
// Output: [4,4,5,5,3,6]

function frequencySort(arr: number[]): number[] {
    let frequency= {};
    for(let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        frequency[temp] ? frequency[temp]++ : frequency[temp] = 1;
    }
    

    return arr.sort((a, b) => {
        if(frequency[a] !== frequency[b]) {
            return frequency[b] - frequency[a];  
        }
        return a - b;  
    });
}

console.log(frequencySort([4,5,6,5,4,3]));

const testFrequencySort = [
    {input: [4,5,6,5,4,3], expected: [4,4,5,5,3,6]},
    {input: [3,5,3,5,4,3], expected: [3,3,3,5,5,4]},
    {input: [4,5,1,5,4,5], expected: [5,5,5,4,4,1]},
    {input: [10,5,6,5,6,3], expected: [5,5,6,6,3,10]},
    {input: [1,5,6,5,2,3], expected: [5,5,1,2,3,6]},
]

testFrequencySort.forEach((test, index) => {
    const actual = frequencySort(test.input);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`)
})