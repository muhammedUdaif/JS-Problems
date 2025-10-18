// 4. Write a program that takes a word and prints a pattern like this:

// Input: CAT
// Output:
// C
// CA
// CAT
// AT
// T

let input = "CAT";

for(let i=0; i<input.length; i++) {
    let temp = "";
    for(let j=i; j<input.length; j++) {
        temp += input[j];
        if(temp !== "A") {
            console.log(temp);
        }
    }
}