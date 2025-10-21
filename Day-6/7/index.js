// 7. Flatten Nested Arrays

// Description:
// Without using .flat(), write a recursive function to flatten an array of arbitrary depth.

// Example:
// Input → [1, [2, [3, [4]], 5]]
// Output → [1, 2, 3, 4, 5]

function flatArray(arr) {
   let result = [];
   function nestedFlatArray(subarr) {
      for(let i=0; i< subarr.length; i++) {
        if(Array.isArray(subarr[i])) {
            nestedFlatArray(subarr[i]);
        }else {
            result[result.length] = subarr[i];
        }
      }
   }
   nestedFlatArray(arr);
   return result;
}
console.log(flatArray([1, [2, [3, [4]], 5]]));