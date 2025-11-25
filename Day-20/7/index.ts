// 7. Count Vowels in a String
// input: MUHAMMED  (vowels is aeiou or AEIOU)
// output: 3

function vowelsCount(str: string) {
    let vowels = "aeiou"
    let count = 0;
    let newStr = str.toLowerCase().split("");

    for(let i=0; i< newStr.length; i++) {
        if(vowels.includes(newStr[i])) {
            count ++;
        }
    }
    return count;
}

console.log(vowelsCount("MUHAMMED"));

// test Cases

const testVowelsCount = [
    {input: "MUHAMMED", expected: 3},
    {input: "muhammed", expected: 3},
    {input: "learniNg", expected: 3},
    {input: "AbsOrBIng", expected: 3},
]

testVowelsCount.forEach((test, index) => {
    const actual = vowelsCount(test.input);
    const result = actual === test.expected ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`)
})