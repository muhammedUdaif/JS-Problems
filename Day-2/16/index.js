// 16. Write a program that takes a list of strings as input and returns the list sorted based on the length of the strings, with shorter strings appearing first. If two strings have the same length, maintain their relative order.

// Test cases:
// Input: ["open", "source", "programming", "is", "fun"]
// Expected output: ["is", "fun", "open", "source", "programming"]

// Input: ["hello", "world"]
// Expected output: ["hello", "world"]

// Input: ["cat", "dog", "elephant", "tiger"]
// Expected output: ["cat", "dog", "tiger", "elephant"]

function stringList(arr) {
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