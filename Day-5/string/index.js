
// function reverseWords(str) {
//     if(typeof(str) !== "string") {
//         return false;
//     }
//     let output = "";
//     let n =  str.length -1;
//     for(let i = n; i>=0; i--) {
//         output += str[i]
//     }
//     return output
// }
// console.log(reverseWords("Working at vonnue"));


// const testReverseWords = [
//    {input: "muhammed udaif", expected: "fiadu demmahum"},
//    {input: "Hello world", expected: "dlrow olleH" },
//    {input: "I love coding", expected: "gnidoc evol I"},
//    {input: "consectetur adipisicing", expected: "gnicisipida rutetcesnoc"},
//    {input: "Perspiciatis rem ipsa", expected: "aspi mer sitaicipsreP"},
//    {input: "quaerat nobis ex", expected: "xe sibon tareauq"},
//    {input: "praesentium asperiores", expected: "seroirepsa muitnesearp"},
//    {input: "sapiente iure", expected: "erui etneipas"},
//    {input: "Suscipit vero maxime", expected: "emixam orev tipicsuS"},
//    {input: "placeat delectuse", expected: "esutceled taecalp"},
//    {input: "Eaque harum laborum", expected: "murobal murah euqaE"},
//    {input: "sapiente cupiditate", expected: "etatidipuc etneipas"},
//    {input: "Working at vonnue", expected: "eunnov ta gnikroW"},
//    {input: 123456, expected: false},
//    {input: true, expected: false},
// ]

// testReverseWords.forEach((test, index) => {
//     const actual = reverseWords(test.input);
//     const result = actual === test.expected ? "Passed" : "Fail";

//     console.log(`Test Case ${index + 1}: ${result}`);
// })

function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for(let char of str) {
       if(vowels.includes(char)) {
        count ++;
       }
    }
    return count;
}

console.log(countVowels("muhammed"));

const testCountVowels = [
    {input: "muhammed", expected: 3 },
    {input: "vonnue", expected: 3 },
    {input: "consectetur", expected: 3 },
    {input: "muhammed", expected: 3 },
    {input: "muhammed", expected: 3 },
    {input: "muhammed", expected: 3 },
    {input: "muhammed", expected: 3 },
    {input: "muhammed", expected: 3 },
    {input: "muhammed", expected: 3 },
    {input: "muhammed", expected: 3 },
    {input: "muhammed", expected: 3 },
    {input: "muhammed", expected: 3 },
    {input: "muhammed", expected: 3 },
    {input: "muhammed", expected: 3 },
    {input: "muhammed", expected: 3 },
]

testCountVowels.forEach((test, index) => {
    const actual = countVowels(test.input);
    const result = actual === test.expected ? "pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})

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

// function capitalize(sentence) {
//     return sentence.split(" ").map(word => 
//         word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
// }
// console.log(capitalize("my name"))