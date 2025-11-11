// Write a function Pipe(...fns) that composes multiple 
// functions left-to-right.
// Example:
// const add5 = x => x + 5;
// const multiply3 = x => x * 3;
// const piped = Pipe(add5, multiply3);
// piped(5); // → multiply3(add5(5)) → 30 

function pipe<T>(...fns: Array< (item: T) => Promise <T>>) {
   return async function returnFunction(initialValue: T): Promise <T> {
     let result = initialValue;
     for(let task of fns) {
        result = await task(result);
     }
     return result;
   }
}

const add5 = async (x: number) => x + 5;
const multiply3 = async (x: number) => x * 3;
const piped = pipe(add5, multiply3);

// test Case

const testPipe = [
    {input: 5, expected: 30},
    {input: 6, expected: 33},
    {input: 40, expected: 135},
    {input: 300, expected: 915},
    {input: 0, expected: 15},
];

(async () => {
    for(let test of testPipe) {
        const actual = await piped(test.input);
        const result = actual === test.expected ? "Pass": "Fail";

        console.log(`Test Case : ${result}`);
    }
})();
