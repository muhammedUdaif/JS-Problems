// function myMap(arr, callbackMap) {
//     if(typeof(arr) !== "object") {
//         return false;
//     }
//     let output = [];
//     for(let i=0; i< arr.length; i++) {
//         output.push(callbackMap(arr[i]));
//     }
//     return output;
// }

// function callbackMap(i) {
//     return 10 * i
// }

// console.log(myMap([1,2,3,4,5], callbackMap));

// const testmyMap = [
//     {input1:[1,2,3,4,5], input2: callbackMap, expected: [10, 20, 30, 40, 50] },
//     {input1: [10, 11, 13, 14, 15], input2: callbackMap, expected: [100,110,130,140, 150] },
//     {input1: [2, 3, 20, 4, 5, 6], input2: callbackMap, expected:[20, 30, 200, 40, 50, 60]},
//     {input1: [5, 6, 7, 8, 30], input2: callbackMap, expected: [50, 60, 70, 80, 300]},
//     {input1: [4, 15, 26, 8, 9], input2: callbackMap, expected: [40, 150, 260, 80, 90] },
//     {input1: [11, 12, 13, 15, 6], input2: callbackMap, expected: [110,120,130,150, 60] },
//     {input1: [21, 22, 24, 25, 6], input2: callbackMap, expected: [210, 220, 240, 250, 60]},
//     {input1: [13, 4, 16, 17], input2: callbackMap, expected: [130, 40, 160, 170] },
//     {input1: [41, 42, 3, 45, 46], input2: callbackMap, expected: [410, 420, 30, 450, 460] },
//     {input1: [144, 5, 7, 148], input2: callbackMap, expected: [1440, 50, 70, 1480] },
//     {input1: [9, 10, 11, 12, 14], input2: callbackMap, expected: [90, 100, 110, 120, 140] },
//     {input1: [6, 7, 8, 10, 11], input2: callbackMap, expected: [60, 70, 80, 100, 110] },
//     {input1: "muhammed udaif", input2: callbackMap, expected: false},
//     {input1: false, input2: callbackMap, expected: false },    
// ]

// testmyMap.forEach((test, index) => {
//     const actual = myMap(test.input1, test.input2);
//     const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

//     console.log(`Test Case ${index + 1}: ${result}`);
// })
// function myFilter(arr, callbackFilter) {
//     if(typeof(arr) !== "object") {
//         return false;
//     }
//     let output = [];
//     for(let i=0; i< arr.length; i++) {
//         if(callbackFilter(arr[i])) {
//             output.push(arr[i]);
//         }
//     }
//     return output
// }

// function callbackFilter(i) {
//     return i > 10;
// }

// console.log(myFilter([3,45,12,6,37], callbackFilter));

// const testMyFilter = [
//     {input1: [1,2,4,12,25,30], input2: callbackFilter, expected: [12, 25, 30]},
    // {input1: [10, 11, 13, 14, 15], input2: callbackFilter, expected: [11,13,14,15] },
    // {input1: [2, 3, 20, 4, 5, 6], input2: callbackFilter, expected:[20]},
    // {input1: [5, 6, 7, 8, 30], input2: callbackFilter, expected: [30]},
    // {input1: [4, 15, 26, 8, 9], input2: callbackFilter, expected: [15,26] },
    // {input1: [11, 12, 13, 15, 6], input2: callbackFilter, expected: [11,12,13,15] },
    // {input1: [21, 22, 24, 25, 6], input2: callbackFilter, expected: [21, 22, 24, 25]},
    // {input1: [13, 4, 16, 17], input2: callbackFilter, expected: [13, 16, 17] },
    // {input1: [41, 42, 3, 45, 46], input2: callbackFilter, expected: [41, 42, 45, 46] },
    // {input1: [144, 5, 7, 148], input2: callbackFilter, expected: [144, 148] },
    // {input1: [9, 10, 11, 12, 14], input2: callbackFilter, expected: [11, 12, 14] },
    // {input1: [6, 7, 8, 10, 11], input2: callbackFilter, expected: [11] },
    // {input1: "muhammed udaif", input2: callbackFilter, expected: false},
    // {input1: false, input2: callbackFilter, expected: false },
// ]

// testMyFilter.forEach((test, index) =>{
//     const actual = myFilter(test.input1, test.input2);
//     const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

//     console.log(`Test Case ${index + 1}: ${result}`);
//  })