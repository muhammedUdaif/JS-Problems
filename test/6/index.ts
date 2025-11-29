// 6. Develop a string compression tool.

// Input: "aaabbbbcc", "encrypt"
// Output: "a3b4c2"

// Input: "a3b4c2", "decrypt"
// Output: "aaabbbbcc"

function stringCompressor(input: string, mode: string): string {
    if (mode === "encrypt") {
        let compressed = "";
        let count = 1;

        for (let i =1; i < input.length; i++) {
            if (input[i] === input[i -1]) {
                count++;
            }
            else {
                compressed += input[i -1] + count;
                count = 1;
            }

        }
        compressed += input[input.length -1] + count;
        return compressed;
    }
    else {
        let decompressed = "";
        for (let i=0; i < input.length; i+=2) {
            const char = input[i];
            const count = parseInt(input[i + 1])
            decompressed += char.repeat(count);
        }

        return decompressed;
    }
}

console.log(stringCompressor("aaabbbbcc", "encrypt"));


const testStringCompressor = [
    {input1: "aaabbbbcc", input2: "encrypt" , expected: "a3b4c2"},
    {input1: "a3b4c2", input2: "decrypt", expected: "aaabbbbcc"},
    {input1: "acccbbbe", input2: "encrypt", expected: "a1c3b3e1"},
    {input1: "a1c3b3e1", input2: "decrypt", expected: "acccbbbe"}
]

testStringCompressor.forEach((test, index) => {
    const actual = stringCompressor(test.input1, test.input2);
    const result = actual === test.expected ? "Pass" : "Fail";

    console.log(`Test Cases ${index + 1}: ${result}`);
})


