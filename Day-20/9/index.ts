// 9. Check if Array is Sorted (Ascending or Descending)
//      return:
// "ascending"
// "descending"
// "unsorted"
// input : [2,3,4,6,7,2,4,5]

function checkSorted(arr: number[]) {
    let isAscending = true;
    let isDescending = true;

    for(let i=0; i< arr.length; i++) {
        if(arr[i] > arr[i + 1]) {
            isAscending = false;
        }

        if(arr[i] < arr[i + 1]) {
            isDescending = false;
        }
    }
    if(isAscending) return "ascending";
    if(isDescending) return "descending";
    return "unsorted";
}


console.log(checkSorted([2,3,4,6,7,2,4,5]));

// test Cases

const testCheckSorted = [
    {input: [2,3,4,6,7,2,4,5], expected: "unsorted"},
    {input: [1,2,3,4,5,6], expected: "ascending"},
    {input: [6,5,4,3,2,1], expected: "descending"}
]

testCheckSorted.forEach((test, index) => {
    const actual = checkSorted(test.input);
    const result = actual === test.expected ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})