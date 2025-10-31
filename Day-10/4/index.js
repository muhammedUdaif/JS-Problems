// 4. Given an array of strings, words, write a function groupAnagrams(words) that groups words 
// that are anagrams of each other. Return the group sorted by size, from largest group to 
// smallest. 
// Test cases: 
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"] 
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]] 
 
function anagramGrops(arr) {
    let obj = {};
    for(let word of arr) {
        let sortedWord = word.split("").sort().join("");
        if(!obj[sortedWord]) {
            obj[sortedWord] = [];
        }
        obj[sortedWord].push(word);
    }
    const anagramGrops = Object.values(obj);
    anagramGrops.sort((a,b) => b.length - a.length);

    return anagramGrops;
}

console.log(anagramGrops(["eat", "tea", "tan", "ate", "nat", "bat"] ))