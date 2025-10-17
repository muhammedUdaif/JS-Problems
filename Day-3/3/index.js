// 3. Write a function which deep clones a given object.

// Test cases:
// Input: {name: 'JavaScript', country: 'US', dataTypes: ['string', 'number', 'boolean', 'object', 'null', 'undefined']}
// Expected output:  {name: 'JavaScript', country: 'US', dataTypes: ['string', 'number', 'boolean', 'object', 'null', 'undefined']}

function deepClone(input) {
  let result = JSON.parse(JSON.stringify(input));
  console.log(result);
}
deepClone(
    {name: 'JavaScript', country: 'US', dataTypes: ['string', 'number', 'boolean', 'object', 'null', 'undefined']}
);