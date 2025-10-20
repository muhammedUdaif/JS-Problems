
// function reverseWords(str) {
//     let output = "";
//     let n =  str.length -1;
//     for(let i = n; i>=0; i--) {
//         output += str[i]
//     }
//     return output
// }
// console.log(reverseWords("muhammed udaif"));

// function countVowels(str) {
//     let vowels = "aeiouAEIOU";
//     let count = 0;
//     for(let char of str) {
//        if(vowels.includes(char)) {
//         count ++;
//        }
//     }
//     return count;
// }

// console.log(countVowels("muhammed"));

// function extractUsername(email) {
//     let output ;
//     let input = email.indexOf("@")
//     output = email.slice(0,input);
//    return output;
// }
// console.log(extractUsername("udaif@gmail.com"));

// const str = " Hello, World! ";

// let cleanedStr = str.trim().toLowerCase().replace(/[^\w]/g, "");

// console.log(cleanedStr);

function capitalize(sentence) {
    return sentence.split(" ").map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}
console.log(capitalize("my name"))