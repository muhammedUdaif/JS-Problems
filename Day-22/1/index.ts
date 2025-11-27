
// 1. Implement below sorting algorithms:

//  * Bubble Sort 
//  * Quick Sort
//  * Insertion Sort
//  * Merge Sort
//  * Selection Sort

// Bubble Sort 

function bubbleSort(arr: number[]) {
    const n = arr.length;
    for(let i = 0; i< n -1; i++) {
        for(let j = 0; j < n - i -1; j++) {
            if(arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}
console.log("Bubble Sort: ", bubbleSort([64, 34, 25, 12, 22, 11, 90]));
 
const testBubbleSort = [
    {input: [64, 34, 25, 12, 22, 11, 90], expected: [11, 12, 22, 25, 34, 64, 90]},
    {input: [5, 1, 4, 2, 8], expected: [1, 2, 4, 5, 8]},
    {input: [3, 0, -2, 5, -1], expected: [-2, -1, 0, 3, 5]}
]

testBubbleSort.forEach((test, index) => {
    const actual = bubbleSort(test.input);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})
// Quick Sort 

function quickSort(arr: number[]): number[] {
    if(arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left: number[] = [];
    const right: number[] = [];

    for(let i=0; i < arr.length - 1; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log("Quick Sort: ", quickSort([64, 34, 25, 12, 22, 11, 90]));

const testQuickSort = [
    {input: [64, 34, 25, 12, 22, 11, 90], expected: [11, 12, 22, 25, 34, 64, 90]},
    {input: [5, 1, 4, 2, 8], expected: [1, 2, 4, 5, 6]},
    {input: [3, 0, -2, 5, -1], expected: [-2, -1, 0, 3, 5]}
]

testQuickSort.forEach((test, index) => {
    const actual = quickSort(test.input);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})

// Insetion Sort 

function InsertionSort(arr: number[]) {
    const n = arr.length;
    for(let i=1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;

        while(j >=0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j -1;
        }
        arr[j + 1] = key;
    }

    return arr;
}

console.log("Insertion Sort: ", InsertionSort([64, 34, 25, 12, 22, 11, 90]));

const testInsertionSort = [
    {input: [64, 34, 25, 12, 22, 11, 90], expected: [11, 12, 22, 25, 34, 64, 90]},
    {input: [5, 1, 4, 2, 8], expected: [1, 2, 4, 5, 8]},
    {input: [3, 0, -2, 5, -1], expected: [-2, -1, 0, 3, 5]}
]

testInsertionSort.forEach((test, index) => {
    const actual = InsertionSort(test.input);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})

// Merge Sort 

function mergeSort(arr: number[]): number[] {
    if(arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return [...mergeSort(left), ...mergeSort(right)];

}

console.log("Merge Sort: ", mergeSort([64, 34, 25, 12, 22, 11, 90]));

const testMergeSort = [
    {input: [64, 34, 25, 12, 22, 11, 90], expected: [11, 12, 22, 25, 34, 64, 90]},
    {input: [5, 1, 4, 2, 8], expected: [1, 2, 4, 5, 8]},
    {input: [3, 0, -2, 5, -1], expected: [-2, -1, 0, 3, 5]}
]

testMergeSort.forEach((test, index) => {
    const actual = mergeSort(test.input);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})

// Selection Sort 

function selectionSort(arr: number[]): number[] {
    const n = arr.length;
    for(let i=0; i< n -1; i++) {
        let minIdx = 1;
        for(let j = i + 1; j < n; j++) {
            if(arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }

        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }

    return arr;
}

console.log("Selection Sort: ", selectionSort([64, 34, 25, 12, 22, 11, 90]));

const testSelectionSort = [
    {input: [64, 34, 25, 12, 22, 11, 90], expected: [11, 12, 22, 25, 34, 64, 90]},
    {input: [5, 1, 4, 2, 8], expected: [1, 2, 4, 5, 8]},
    {input: [3, 0, -2, 5, -1], expected: [-2, -1, 0, 3, 5]}
]

testSelectionSort.forEach((test, index) => {
    const actual = selectionSort(test.input);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
});