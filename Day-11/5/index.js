// 5. Write a function to check object equality. Which receives two objects as arguments,
//  and it should return "Equal" if both contain same keys, values, "Not Equal" if not.

// Test cases:
// Input: { a: 1, b: 2 }, { b: 3, c: 4 }
// Output: "Not Equal"

function objectEquality(obj1, obj2) {
  if(typeof(obj1) !== "object"  || typeof(obj2) !== "object") {
    return false;
  }
  if(JSON.stringify(obj1) === JSON.stringify(obj2)) {
     return "Equal";
  }else {
    return "Not Equal";
  }
}

console.log(objectEquality({ a: 1, b: 2 }, { b: 3, c: 4 }));

const testObjectEquality = [
  {input1: { a: 1, b: 2 }, input2:{ b: 3, c: 4 }, expected: "Not Equal"},
  {input1: { a: 1, b: 2 }, input2:{ a: 1, b: 2 }, expected: "Equal"},
  {input1:  false, input2:{ b: 3, c: 4 }, expected: false},
  {input1: { a: 1, b: 2 }, input2: true, expected: false},
  {input1: true, input2:false, expected: false},
  {input1: true, input2: true, expected: false},
  {input1: false, input2: false, expected: false},
  {input1: false, input2: true, expected: false},
  {input1: 1234, input2: true, expected: false},
  {input1: false, input2: 1456, expected: false},
  {input1: undefined, input2: true, expected: false},
  {input1: 245, input2: undefined, expected: false},
  {input1: Symbol, input2: true, expected: false},
  {input1: 4645, input2: Symbol, expected: false},
  {input1: "Hello", input2: true, expected: false},
  {input1: 24666, input2: "Hello", expected: false},
]

testObjectEquality.forEach((test, index) => {
  const actual = objectEquality(test.input1, test.input2);
  const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

  console.log(`Test Case ${index + 1}: ${result}`);
})