// 3. Invert Keys and Values in an Object

// Test cases:
// Input: { a: 1, b: 2 }
// Output: { 1: "a", 2: "b" }

function invertObject(obj) {
   let result = {};
   for(let item in obj) {
    result[obj[item]] = item;
   }
   return result;
}
console.log(invertObject({ a: 1, b: 2 }));