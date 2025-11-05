// 2. Write a function which takes an array of strings (words) and a width maxWidth, 
// format the text such that each line has exactly maxWidth characters and is fully (left and right) justified. 
// Last line can be justified to the left.

// Test cases:
// Input: ["This", "is", "an", "example", "of", "text", "justification."], 16
// Output:
// [
//    "This    is    an",
//    "example  of text",
//    "justification.  "
// ]

// Input: ["What","must","be","acknowledgment","shall","be"], 16
// Output:
// [
//   "What   must   be",
//   "acknowledgment  ",
//   "shall be        "
// ]

function wordWidth(arr, n) {
    let result = [];
    let maxWidth = 0;
    for(let i=0; i< arr.length; i++) {
        if(maxWidth += arr[i].length === n) {
            
        }
    }
}

console.log(wordWidth(["This", "is", "an", "example", "of", "text", "justification."]))
