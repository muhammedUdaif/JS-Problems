// 7. Write a function to convert text from camelCase to snake_case.

// Test cases:
// Input: 'myFunction'
// Expected output: 'my_function'

function stringConvertion(str) {
   if(typeof(str) !== "string") {
      return "Accepting input must be string only not accepting any other type inputs";
   }
   return str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
}
console.log(stringConvertion('myFunction'));

const testStirngConvertion = [
   {input: 'myFunction', expected: 'my_function'},
   {input: 'muhammedUdaif', expected: 'muhammed_udaif'},
   {input: 'loveCoding', expected: 'love_coding'},
   {input: 'learnGrow', expected: 'learn_grow'},
   {input: 'exploringWorld', expected: 'exploring_world'},
   {input: 'loveMusic', expected: 'love_music'},
   {input: 'dailyGrowth', expected: 'daily_growth'},
   {input: 'observationIsTheKeypoint', expected: 'observation_is_the_keypoint'},
   {input: 'javascriptIsTricky', expected: 'javascript_is_tricky'},
   {input: 'featureIsAdded', expected: 'feature_is_added'},
   {input: 'formIntegration', expected: 'form_integration'},
   {input: 'vonnueInnovation', expected: 'vonnue_innovation'},
   {input: 1234, expected: false},
   {input: true, expected: false},
]

testStirngConvertion.forEach((test, index) => {
   const actual = stringConvertion(test.input);
   const result = actual === test.expected ? "Passed" : "Failed";

   console.log(`Test Case ${index + 1}: ${result}`);
})