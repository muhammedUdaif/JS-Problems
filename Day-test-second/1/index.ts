// Write a function findLongestChain(arr) that:
// Finds the first longest strictly increasing chain in the array.
// Example:
// Input: [5, 1, 2, 3, 0, 4, 6]
// Output:
// List: 1,2,3,4,6
// length: 5
// Returns both:
// the chain itself
// the length of the chain

function findLongestChain(arr: number[]) {
    const n = arr.length;
    if (n === 0) return { chain: [], length: 0 };

    const dummyArray1 = new Array<number>(n).fill(1);
    console.log(dummyArray1);
    const dummyArray2 = new Array<number>(n).fill(-1);
    console.log(dummyArray2)
    
    for (let i = 0; i < n; i++) { 
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[i] && dummyArray1[j] + 1 > dummyArray1[i]) {
                dummyArray1[i] = dummyArray1[j] + 1;
            }
        }
    }

    const maximumLength = Math.max(...dummyArray1);
    console.log(maximumLength);

}

console.log(findLongestChain([5, 1, 2, 3, 0, 4, 6]));