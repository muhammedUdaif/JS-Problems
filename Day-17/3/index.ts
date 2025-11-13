// 3.Write a function SortMixedNested(arr) that takes an array of mixed types and nested arrays,
//  and sorts all numbers in ascending order recursively, keeping the same nested structure.
// Example:
// Input: [3, [2, [5, 1]], 4]
// Output: [1, [2, [3, 4]], 5]

type NestedArray<T> = Array<T | NestedArray <T>>

function SortMixedNested(arr: NestedArray<number>) {
    let flatArray = arr.flat();
    let flatArray1 = flatArray.flat();
    for(let i=0; i< flatArray1.length; i++) {
        for(let j = i + 1; j < flatArray1.length; j++) {
            if(flatArray1[i] > flatArray1[j]) {
                let temp = flatArray1[i];
                flatArray1[i] = flatArray1[j];
                flatArray1[j] = temp;
            }
        }
    }
   function nestedRecursive(nestedArray: NestedArray<number>): NestedArray<number> {
        const result:NestedArray<number> = [];
        for(const item of nestedArray) {
            if(Array.isArray(item)) {
                result.push(nestedRecursive(item));
            } else {
                result.push(flatArray1.shift());
            }
        }
        return result;
    }
    return nestedRecursive(arr);

}
console.log(SortMixedNested([3, [2, [5, 1]], 4]));

const testSortMixedNested = [
    {input: [3, [2, [5, 1]], 4], expected: [1, [2, [3, 4]], 5]},
    {input: [5, [4, [7, 6]], 1], expected: [1, [4, [5, 6]], 7]},
    {input: [31, [200, [5, 8]], -4], expected: [-4, [5, [8, 31]], 200]},
    {input: [43, [12, [53, -1]], 43], expected: [-1, [12, [43, 43]], 53]},
    {input: [0, [-2, [50, 6]], 4], expected: [-2, [0, [4, 6]], 50]},
]

testSortMixedNested.forEach((test, index) => {
    const actual = SortMixedNested(test.input);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})