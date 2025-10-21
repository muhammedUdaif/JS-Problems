// 3. Find the Missing Number

// Description:
// Given an array containing numbers from 1 to n with one missing, find the missing number.
// You cannot use .includes() or .indexOf() directly.

// Example:
// Input → [1, 2, 3, 5, 6]
// Output → 4

function missingNum(arr) {
    for(let i=0; i< arr.length; i++) {
        if(arr[i + 1] - arr[i] !== 1) {
            return arr[i] + 1;
        }
    }
}

console.log(missingNum([1, 2, 3, 5, 6]));