// Write a function Waterfall(tasks) that chains an array of async functions 
// where each function's output is passed to the next one.
// Example:
// const add = async x => x + 2;
// const square = async x => x * x;
// await Waterfall([add, square])(2) → 16

async function Waterfall<T>(tasks: Array<(item: T) => Promise<T>>) {
  return async function returnFunction(initialValue: T): Promise<T> {
    let result = initialValue;
    for (let task of tasks) {
      result = await task(result);
    }
    return result;
  };
}

const add = async (x: number) => x + 2;
const square = async (x: number) => x * x;

// test cases

const testWaterFall = [
  { input: 2, expected: 16 },
  { input: 40, expected: 1764},
  { input: 300, expected: 91204},
  { input: 15, expected: 289}
];

(async () => {
  const run = await Waterfall([add, square]);
  
  for (let test of testWaterFall) {
    const actual = await run(test.input);
    const result = actual === test.expected ? "Pass" : "Fail";
    console.log(`Test Case : ${result}`);
  }
})();
