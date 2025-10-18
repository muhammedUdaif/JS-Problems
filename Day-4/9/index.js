// 4. Write a program that determines if a string is an anagram of another string. An anagram is a word or phrase formed by rearranging the letters of another word or phrase.

// Test cases:
// Input: "listen", "silent"
// Expected output: True

// Input: "restful", "fluster"
// Expected output: True

// Input: "hello", "world"
// Expected output: False

function anagram(str1, str2) {
    let n1 = str1.length;
    let n2 = str2.length;
    if(n1 != n2) {
        return false;
    }
   let sortedStr1 = str1.split('').sort().join('');
   let sortedStr2 = str2.split('').sort().join('');

   return sortedStr1 === sortedStr2;
}
console.log(anagram("restful", "fluster"));