// 3. Write a function that prints all given array of strings in uppercase.

function upperCase(arr : string[]): string[] {
    let result = [];
   for(let i=0; i< arr.length; i++) {
    result[result.length] = arr[i].toUpperCase();
   }
   return result;
}
console.log(upperCase(["udaif","yedhu","prabhath"]));
