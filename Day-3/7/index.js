// 7. Write a function to convert text from camelCase to snake_case.

// Test cases:
// Input: 'myFunction'
// Expected output: 'my_function'

function stringConvertion(str) {
   return str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
}
console.log(stringConvertion("myFunction"));