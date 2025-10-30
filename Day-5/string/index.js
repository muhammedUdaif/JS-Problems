
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

// const testCountVowels = [
//     {input: "muhammed", expected: 3 },
//     {input: "vonnue", expected: 3 },
//     {input: "consectetur", expected: 3 },
//     {input: "muhammed", expected: 3 },
//     {input: "muhammed", expected: 3 },
//     {input: "muhammed", expected: 3 },
//     {input: "muhammed", expected: 3 },
//     {input: "muhammed", expected: 3 },
//     {input: "muhammed", expected: 3 },
//     {input: "muhammed", expected: 3 },
//     {input: "muhammed", expected: 3 },
//     {input: "muhammed", expected: 3 },
//     {input: "muhammed", expected: 3 },
//     {input: "muhammed", expected: 3 },
//     {input: "muhammed", expected: 3 },
// ]

// testCountVowels.forEach((test, index) => {
//     const actual = countVowels(test.input);
//     const result = actual === test.expected ? "pass" : "Fail";

//     console.log(`Test Case ${index + 1}: ${result}`);
// })

// function extractUsername(email) {
//     if(typeof(email) !== "string" || !email.includes("@")) {
//         return false;
//     }
//     let output ;
//     let input = email.indexOf("@")
//     output = email.slice(0,input);
//    return output;
// }
// console.log(extractUsername("udaif@gmail.com"));

// const testExtractUsername = [
//     {input: "udaif@gmail.com", expected: "udaif" },
//     {input: "arungopal@gmail.com", expected: "arungopal" },
//     {input: "mahebg@gmail.com", expected: "mahebg" },
//     {input: "junior@gmail.com", expected: "junior" },
//     {input: "hoawebe@gmail.com", expected: "hoawebe" },
//     {input: "yedhu@gmail.com", expected: "yedhu" },
//     {input: "prabhath@gmail.com", expected: "prabhath" },
//     {input: "sharon@gmail.com", expected: "sharon" },
//     {input: "deedhath@gmail.com", expected: "deedhath" },
//     {input: "learn@gmail.com", expected: "learn" },
//     {input: "growth@gmail.com", expected: "growth" },
//     {input: "explore@gmail.com", expected: "explore" },
//     {input: "12234@gmail.com", expected: "12234" },
//     {input: "rohangmail.com", expected: false },
//     {input: 3456792, expected: false },
// ]

// testExtractUsername.forEach((test, index) => {
//     const actual = extractUsername(test.input);
//     const result = actual === test.expected ? "Passed" : "Failed";

//     console.log(`Test Case ${index + 1} : ${result}`);
// })


// function cleanedStr(str) {
//     if(typeof(str) !== "string") {
//         return false;
//     }
//     let output = str.trim().toLowerCase().replace(/[^\w]/g, "");
//     return output;
// }
// console.log(cleanedStr(" Hello, World! "));

// const testCleanedStr = [
//     {input: " Hello, World! ", expected: "helloworld" },
//     {input: " Muhammed! Udaif ", expected: "muhammedudaif" },
//     {input: " Lorem ipsum dolor@ ", expected: "loremipsumdolor" },
//     {input: " sit, amet consectetur ", expected: "sitametconsectetur" },
//     {input: " adipisicing elit. ", expected: "adipisicingelit" },
//     {input: " Impedit odit ", expected: "impeditodit" },
//     {input: " maiores unde! ", expected: "maioresunde" },
//     {input: " Fuga suscipit ", expected: "fugasuscipit" },
//     {input: " ipsa at rem ", expected: "ipsaatrem" },
//     {input: " molestiae delectus ", expected: "molestiaedelectus" },
//     {input: " nemo voluptate! ", expected: "nemovoluptate" },
//     {input: " Quaerat, minus. ", expected: "quaeratminus" },
//     {input: " Fugiat architecto ", expected: "fugiatarchitecto" },
//     {input: 12345, expected: false },
//     {input: " a deserunt ab et. ", expected: "adeseruntabet" },
// ]

// testCleanedStr.forEach((test, index) => {
//     const actual = cleanedStr(test.input);
//     const result = actual === test.expected ? "Passed" : "Fail";

//     console.log(`Test Case ${index + 1}: ${result}`);
// })

// function capitalize(sentence) {
//     if(typeof(sentence) !== "string") {
//        return false;
//     }
//     return sentence.split(" ").map(word => 
//         word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
// }
// console.log(capitalize("my name"))

// const testCapitalize = [
//     {input: "my name", expected: "My Name"},
//     {input: "lorem ipsum", expected: "Lorem Ipsum"},
//     {input: "dolor sit", expected: "Dolor Sit"},
//     {input: "amet consectetur", expected: "Amet Consectetur"},
//     {input: "adipisicing elit", expected: "Adipisicing Elit"},
//     {input: "Mollitia eligendi", expected: "Mollitia Eligendi"},
//     {input: "quia quam", expected: "Quia Quam"},
//     {input: "facilis eius", expected: "Facilis Eius"},
//     {input: "similique consequuntur", expected: "Similique Consequuntur"},
//     {input: "obcaecati dignissimos", expected: "Obcaecati Dignissimos"},
//     {input: "aliquid assumenda", expected: "Aliquid Assumenda"},
//     {input: "aspernatur ad", expected: "Aspernatur Ad"},
//     {input: "voluptatum culpa", expected: "Voluptatum Culpa"},
//     {input: 23456, expected: false},
//     {input:  true, expected: false},
// ]

// testCapitalize.forEach((test, index) => {
//     const actual = capitalize(test.input);
//     const result = actual === test.expected ? "Passed" : "Fail";

//     console.log(`Test Case ${index + 1}: ${result}`);
// })