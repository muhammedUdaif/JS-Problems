//  2.  Find the Most Frequent Element in an Array
// input: [1,2,2,3,3,3,4]
// output: 3

function mostFrequent(arr: number[]): number{
   let maxcount = 0;
   let maxElement = arr[0];

   for(let i=0; i< arr.length; i++) {
       let count = 0;

       for(let j =0; j< arr.length; j++) {
           if(arr[i] === arr[j]) {
              count ++;
           }
       }
       if(count > maxcount) {
          maxcount = count;
          maxElement = arr[i]
       }
   }
   return maxElement;
}

console.log(mostFrequent([1,2,2,3,3,3,4]));

// test Cases

const testMostFrequent = [
    {input: [1,2,2,3,3,3,4], expected: 3},
    {input: [4,4,2,1,4,1,3], expected: 4},
    {input: [5,6,1,2,6,4], expected: 6}
]

testMostFrequent.forEach((test, index) => {
    const actual = mostFrequent(test.input);
    const result = actual === test.expected ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})