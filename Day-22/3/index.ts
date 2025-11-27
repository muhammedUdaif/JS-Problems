// 3. Implement below searching algorithms:
//  * Linear search
//  * Binary search

// Linear Search

function linearSearch(arr: number[], target: number) {
    for(let i=0; i< arr.length; i++) {
        if(arr[i] === target) {
            return i;
        }
    }
    return -1;
}

console.log("Linear Search: ", linearSearch([10, 23, 45, 70, 11, 15, 20], 70));

const testLineeatSearch = [
    {input: [10, 23, 45, 70, 11, 15, 20], target: 70, expected: 3},
    {input: [1, 2, 3, 4, 5], target: 4, expected: 3},
    {input: [5, 4, 3, 2, 1], target: 6, expected: -1}
]

testLineeatSearch.forEach((test, index) => {
    const actual = linearSearch(test.input, test.target);
    const result = actual === test.expected ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})


// Binary Search

function binarySearch(arr: number[], target: number) {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        if(arr[mid] === target) {
            return mid;
        } else if(arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid -1;
        }
    }
    return -1;
}

console.log("Binary Search: ", binarySearch([10, 11, 15, 20, 23, 45, 70], 23));

const testBinarySearch = [
    {input: [10, 11, 15, 20, 23, 45, 70], target: 23, expected: 4},
    {input: [1, 2, 3, 4, 5], target: 4, expected: 3},
    {input: [5, 10, 15, 20, 25], target: 30, expected: -1}
]

testBinarySearch.forEach((test, index) => {
    const actual = binarySearch(test.input, test.target);
    const result = actual === test.expected ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})