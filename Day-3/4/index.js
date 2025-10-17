// 4. Write a function which accepts two arrays and a position value, where the values of the second array should be placed in the given position of the first array. The function should return an updated array.

// Test cases:
// Input: [1, 2, 3], [4, 5, 6], 2
// Expected output: [1, 2, 4, 5, 6, 3]

function arrayInsertion(arr1, arr2, target) {
   let result = [];
   result.push(...arr1);
   result.push(arr2);
   for(let i=0; i< result.length; i++) {
      if(i === target) {
        let temp;
        temp = result[i];
        result[i] = result[result.length - 1];
        result[result.length - 1] = temp;
      }
   }
   return result.flat()
}
console.log(arrayInsertion([1, 2, 3], [4, 5, 6], 2));