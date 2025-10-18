// 5. Write a function to convert text from camelCase to kebab-case.

// Test cases:
// Input: 'myFunction'
// Expected output: 'my-function'

function kebabCase(str) {
    return str.replace(/([(a-z)])([(A-Z)])/g, '$1-$2').toLowerCase();
}
console.log(kebabCase("myFunction"));