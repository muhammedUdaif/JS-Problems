// 10. Write a program longestCommonPrefix(strings) that takes a list of strings and returns the 

// longest common prefix among them. Your function must be case-sensitive. 
// Test cases: 
// Input: ["flower", "flow", "flight"] 
// Output: "fl" 
// Input: ["dog", "racecar", "car"] 
// Output: "" (an empty string, as there is no common prefix) 

const longestCommonPrefix = strs => {

    if(strs.length === 0 || strs === null) return '';

    console.log(strs.sort());

    let first = strs[0], last = strs[strs.length - 1];
    let prefix = '';

    for(let i = 0; i < first.length; i++) {
        if(first[i] !== last[i]) break;
        prefix += first[i];
    }

    return prefix;

}
console.log(longestCommonPrefix(["flower", "flow", "flight"]))

