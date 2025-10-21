// 2. Word Frequency Counter

// Description:
// Given a paragraph string, return an object showing the number of times each word appears (ignore case and punctuation).

// Example:
// Input → "Hello hello world, world!"
// Output → { hello: 2, world: 2 }

function wordFrequency(str) {
    let obj = {};
    let word =  str.split(" ").map((item) => item.toLowerCase());
    for(let i=0; i< word.length; i++) {
        let temp = word[i];
        obj[temp] ? obj[temp]++ : obj[temp] = 1;
    }
    return obj
}
console.log(wordFrequency("hello muhammed hello yedhu hello muhammed! udaif"));
