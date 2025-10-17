// 9. Write a function to remove duplicate characters from the given string.

// Test cases:
// Input: 'apple'
// Expected output: 'aple'

function removeDuplicate(str) {
    let count = 0;
   for(let i=0; i<str.length; i++) {
     if(str[i] === str[i+1]) {
        count ++;
        if(count >= 1) {
            const newStr = str.replace(str[i], "");
            return newStr
        }
     }
   }
}
console.log(removeDuplicate("apple"));