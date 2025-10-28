// 16. Write a program that takes a list of strings as input and returns the list sorted based on the length of the strings, with shorter strings appearing first. If two strings have the same length, maintain their relative order.

// Test cases:
// Input: ["open", "source", "programming", "is", "fun"]
// Expected output: ["is", "fun", "open", "source", "programming"]

// Input: ["hello", "world"]
// Expected output: ["hello", "world"]

// Input: ["cat", "dog", "elephant", "tiger"]
// Expected output: ["cat", "dog", "tiger", "elephant"]

function stringList(arr) {
    if(typeof(arr) !== "object") {
        return "The type of input array need to object type not accepted by any other types"
    }
    for(let i=0; i<arr.length; i++) {
       for(let j=i+1; j<arr.length; j++) {
          if(arr[i].length > arr[j].length) {
              let temp;
              temp = arr[i];
              arr[i] = arr[j];
              arr[j] = temp;
          }
       }
    }
    return arr;
}
console.log(stringList(["cat", "dog", "elephant", "tiger"]));

const testStringList = [
    {input: ["open", "source", "programming", "is", "fun"], expected: ["is", "fun", "open", "source", "programming"]},
    {input: ["i", "love", "programming", "learning", "hills"], expected: ["i", "love", "hills", "learning", "programming"]},
    {input: ["hello", "to", "coding", "exploring", "knowledge"], expected: ["to", "hello", "coding", "exploring", "knowledge"]},
    {input: ["hello", "world"], expected: ["hello", "world"]},
    {input: [ "muhammed", "udaif"], expected: [ "udaif", "muhammed"]},
    {input: ["cat", "dog", "elephant", "tiger"], expected: ["cat", "dog", "tiger", "elephant"]},
    {input: ["javascript", "java", "react", "next"], expected: ["java", "next", "react", "javascript"]},
    {input: ["dolor", "Lorem", "consectetur", "elephant"], expected: ["dolor", "Lorem", "elephant", "consectetur"]},
    {input: ["facere", "eligendi", "placeat", "omnis"], expected: ["omnis", "facere", "placeat", "eligendi"]},
    {input: ["sunt", "in", "sint", "inventore"], expected: ["in", "sunt", "sint", "inventore"]},
    {input: ["recusandae", "nemo", "nostrum", "cum"], expected: ["cum", "nemo", "nostrum", "recusandae"]},
    {input: ["nostrum", "fugiat", "ad", "laboriosam"], expected: ["ad", "fugiat", "nostrum", "laboriosam"]},
    {input: ["4", "3", "2", "1"], expected: ["1", "2", "3", "4"]},
    {input: [ 1, 4, 2, 3], expected: [1, 2, 3, 4]},
    {input: "muhammed udaif", expected: "muhammed udaif"},
]

testStringList.forEach((test, index) => {
    const actual = stringList(test.input);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Passed" : "Failed";

    console.log(`Test Case ${index + 1} : ${result}`)
})