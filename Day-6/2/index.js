// 2. Word Frequency Counter
// Description:
// Given a paragraph string, return an object showing the number of times each word appears (ignore case and punctuation).

// Example:
// Input → "Hello hello world, world!"
// Output → { hello: 2, world: 2 }

function wordFrequency(str) {
    if(typeof(str) !== "string") {
        return false;
    }
    let obj = {};
    let word =  str.split(" ").map((item) => item.toLowerCase().replace(/[^\w]/g, ""));
    for(let i=0; i< word.length; i++) {
        let temp = word[i];
        obj[temp] ? obj[temp]++ : obj[temp] = 1;
    }
    return obj
}
console.log(wordFrequency("saepe quam provident, quam"));

const testWordFrequency = [
    {input: "Hello hello world, world!", expected: { hello: 2, world: 2 } },
    {input: "Lorem ipsum lorem sit ipsum", expected: { lorem: 2, ipsum: 2, sit: 1 } },
    {input: "consectetur elit adipisicing elit.", expected: { consectetur: 1, elit: 2, adipisicing: 1 }},
    {input: "Maiores eaque cupiditate! eaque", expected: { maiores: 1, eaque: 2, cupiditate: 1 }},
    {input: "facere iusto numquam iusto corporis@", expected: { facere: 1, iusto: 2, numquam: 1, corporis: 1 }},
    {input: "vitae, aliquam vitae deleniti!", expected: { vitae: 2, aliquam: 1, deleniti: 1 } },
    {input: "ratione error dolores error#", expected: { ratione: 1, error: 2, dolores: 1 } },
    {input: "beatae a inventore a.", expected: { beatae: 1, a: 2, inventore: 1 } },
    {input: "Voluptatibus quam ipsum quam$", expected: { voluptatibus: 1, quam: 2, ipsum: 1 } },
    {input: "velit exercitationem velit adipisci.", expected: { velit: 2, exercitationem: 1, adipisci: 1 } },
    {input: "adipisicing elit. esse Iure, esse.", expected: { adipisicing: 1, elit: 1, esse: 2, iure: 1 } },
    {input: "Numquam tempora, nihil animi nihil", expected: { numquam: 1, tempora: 1, nihil: 2, animi: 1 } },
    {input: "saepe quam provident, quam", expected: { saepe: 1, quam: 2, provident: 1 } },
    {input: 345879, expected: false },
    {input: true, expected: false },
]

testWordFrequency.forEach((test, index) => {
    const actual = wordFrequency(test.input);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})
