// 5. Write a function to convert text from camelCase to kebab-case.

// Test cases:
// Input: 'myFunction'
// Expected output: 'my-function'

function kebabCase(str) {
   if(typeof(str) !== "string") {
      return "Accepting input must be string only not accepting any other type inputs";
   }
    return str.replace(/([(a-z)])([(A-Z)])/g, '$1-$2').toLowerCase();
}
console.log(kebabCase("myFunction"));

const testKebabCase = [
   {input: 'myFunction', expected: 'my-function'},
   {input: 'muhammedUdaif', expected: 'muhammed-udaif'},
   {input: 'loveCoding', expected: 'love-coding'},
   {input: 'learnGrow', expected: 'learn-grow'},
   {input: 'exploringWorld', expected: 'exploring-world'},
   {input: 'loveMusic', expected: 'love-music'},
   {input: 'dailyGrowth', expected: 'daily-growth'},
   {input: 'observationIsTheKeypoint', expected: 'observation-is-the-keypoint'},
   {input: 'javascriptIsTricky', expected: 'javascript-is-tricky'},
   {input: 'featureIsAdded', expected: 'feature-is-added'},
   {input: 'formIntegration', expected: 'form-integration'},
   {input: 'vonnueInnovation', expected: 'vonnue-innovation'},
   {input: 1234, expected: false},
   {input: true, expected: false},
]

testKebabCase.forEach((test, index) => {
    const actual = kebabCase(test.input);
    const result = actual === test.expected ? "Passed" : "Failed";

    console.log(`Test Case ${index + 1} :  ${result}`)
})