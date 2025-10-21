// 5. Custom Filter Function

// Description:
// Implement your own version of JavaScript's Array.filter() function called myFilter() that works exactly the same.
// Then test it with a condition like "keep only numbers > 10".

function myFilter(arr, callbackFilter) {
   let result = [];
   for(let i=0; i< arr.length; i++) {
    if(callbackFilter(arr[i])) {
        result.push(arr[i]);
    }
   }
   return result;
}

function callbackFilter(i) {
    return i > 10;
}
console.log(myFilter([1,2,4,12,25,30], callbackFilter));

