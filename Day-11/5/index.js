// 5. Write a function to check object equality. Which receives two objects as arguments,
//  and it should return "Equal" if both contain same keys, values, "Not Equal" if not.

// Test cases:
// Input: { a: 1, b: 2 }, { b: 3, c: 4 }
// Output: "Not Equal"

function objectEquality(obj1, obj2) {
  if(JSON.stringify(obj1) === JSON.stringify(obj2)) {
    console.log("Equal")
  }else {
    console.log("Not Equal")
  }
}

objectEquality({ a: 1, b: 2 }, { a: 3, c: 4 });